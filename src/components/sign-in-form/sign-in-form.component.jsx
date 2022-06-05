import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useState } from 'react';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utiles/firebase/firebase.utiles';

import './sign-in-form.styles.scss'

const defaultSignInFormFields = {
    email: '',
    password: '',
}

const signInWithGoogle = async () => {
    await signInWithGooglePopup();
};

const SignInForm = () => {
    const [signInFormFields, setSignInFormFields] = useState(defaultSignInFormFields);
    const { email, password } = signInFormFields;

    const resetFormFields = () => {
        setSignInFormFields(defaultSignInFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignInFormFields({...signInFormFields, [name]: value})     
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong Password!');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this!')
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <FormInput
                    label='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button ' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>    
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
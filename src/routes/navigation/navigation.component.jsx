import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as CrwnLogo } from '../../assest/crown.svg'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utiles/firebase/firebase.utiles.js'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from '../../store/user/user.selector'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    <NavLink to="/shop">CONTACT</NavLink>      
                    {currentUser ? (
                        <NavLink as='span' onClick={ signOutUser }>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}       
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown /> }  
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
   
export default Navigation;
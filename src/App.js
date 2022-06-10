import Home from '../src/routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

import { setCurrentUser } from './store/user/user.action'
import { setCategoriesMap } from './store/categories/category.action'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from './utiles/firebase/firebase.utiles'
import Navigation from './routes/navigation/navigation.component';
import Authentication from '../src/routes/Authentication/Authentication.component'
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [])

  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
   </Routes>
  )
}

export default App;

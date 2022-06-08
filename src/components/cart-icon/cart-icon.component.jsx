import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
    ItemCount,
    CartIconContainer,
    ShoppingIcon
} from './cart-icon.styles.jsx'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartNumber } = useContext(CartContext);

    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartIconContainer onClick={ toggleCartOpen }>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{ cartNumber }</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
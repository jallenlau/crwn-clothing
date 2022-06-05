import { ReactComponent as ShoppingIcon } from '../../assest/114 shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartNumber } = useContext(CartContext);

    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-icon-container' onClick={ toggleCartOpen }>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{ cartNumber }</span>
        </div>
    );
};

export default CartIcon;
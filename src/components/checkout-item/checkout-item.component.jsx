import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
} from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const { subItemToCart, addItemToCart, RemoveItemFromCart } = useContext(CartContext);

    const addItem = () => addItemToCart(cartItem);
    const subItem = () => subItemToCart(cartItem);
    const removeItem = () => RemoveItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={ imageUrl } alt={'${ name }'} />
            </ImageContainer>
            <BaseSpan>{ name }</BaseSpan>
            <Quantity>
                <Arrow onClick={ subItem }>&#10094;</Arrow>
                <Value>{ quantity }</Value>
                <Arrow onClick={ addItem }>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{ price }</BaseSpan>
            <RemoveButton onClick={ removeItem }>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
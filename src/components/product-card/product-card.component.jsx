import { useSelector, useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
    ProductCardContainer,
    Footer,
    Name,
    Price,
} from './product-card.styles.jsx'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);

    const addItem = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={ imageUrl } alt={`${name}`} />
            <Footer>
                <Name>{ name }</Name>
                <Price>{ price }</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>
                Add to Card
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard;

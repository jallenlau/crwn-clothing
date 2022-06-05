import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const findItem = cartItems.find((cartItem) => (cartItem.id === productToAdd.id));
    if (findItem) {
        return cartItems.map((cartItem) =>
            (cartItem.id === productToAdd.id) ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        );
    };
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//若以此方式添加计数器会导致每次采用上次cartItem遍历计算
// const sumNumer = (cartItems) => {
//     const num = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
//     return num;
// };

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartNumber: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);

    useEffect(() => {
        const num = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartNumber(num);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
   
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartNumber };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
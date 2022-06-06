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

const subCartItem = (cartItems, productToSub) => {
    const findItem = cartItems.find((cartItem) => (cartItem.id === productToSub.id));
    if (findItem) {
        return cartItems.map((cartItem) =>
            (cartItem.id === productToSub.id) ?
                (cartItem.quantity > 1) ?
                    { ...productToSub, quantity: cartItem.quantity - 1 } :
                    delete cartItems[cartItem.index] :
                    cartItem
        ).filter((cartItem) =>  cartItem.quantity > 0 );
    };
};

const RemoveCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

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
    subItemToCart: () => {},
    totalPrice: 0,
    RemoveItemFromCart: () => {},
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const num = cartItems.reduce((total, cartItem) =>
            total + cartItem.quantity, 0
        );
        setCartNumber(num);
    }, [cartItems])
    
    useEffect(() => {
        const sum = cartItems.reduce((total, cartItem) =>
            total + cartItem.quantity * cartItem.price, 0
        );
        setTotalPrice(sum);
     },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const subItemToCart = (productToSub) => {
        setCartItems(subCartItem(cartItems, productToSub));
    }

    const RemoveItemFromCart = (productToRemove) => {
        setCartItems(RemoveCartItem(cartItems, productToRemove));
    }
   
    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartNumber,
        subItemToCart,
        totalPrice,
        RemoveItemFromCart
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
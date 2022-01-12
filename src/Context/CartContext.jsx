import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const addItem = (item) => {

        const temp = [...cartList];

        let index = -1;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === item.id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            const tempItem = { ...temp[index] }
            temp[index] = tempItem;
            temp[index].quantity += item.quantity;
        } else {
            temp.push(item);
        }

        localStorage.setItem("carrito", JSON.stringify(temp))
        setCartList(temp)
    }

    const removeItem = (id) => {

        const temp = cartList.filter(item => item.id !== id)
        setCartList(temp)
        localStorage.setItem("carrito", JSON.stringify(temp))

    }

    const clearCart = () => {
        const temp = [];
        setCartList(temp);
    }

    useEffect(() => {
        setItemCount(cartList.reduce((a, b) => a + b.quantity, 0))
    }, [cartList])

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || []
        setCartList(carrito)
    }, [])

    return (
        <CartContext.Provider value={{ cartList, itemCount, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContextProvider;
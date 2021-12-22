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

        setItemCount(itemCount + item.quantity)
        localStorage.setItem("carrito", JSON.stringify(temp))
        setCartList(temp)
    }

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || []
        setItemCount(carrito.reduce((accum, curr) => accum + curr.quantity, 0))
        setCartList(carrito)
    }, [])

    return (
        <CartContext.Provider value={{ cartList, itemCount, addItem }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContextProvider;
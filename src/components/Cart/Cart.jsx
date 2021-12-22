import { createContext, useContext } from "react"
import { CartContext } from "../../Context/CartContext";


const Cart = () => {

    const {cartList: items} = useContext(CartContext);

    return (
        <div className="">
            <div className="text-2xl font-bold font-paddington">
                Carrito de compras
            </div>
            <table className="table-auto bg-white rounded-md">
                <thead className="border-b-4 border-beige">
                    <tr className="">
                        <th className="py-4 px-16">
                            Producto
                        </th>
                        <th className="py-4 px-16">
                            Cantidad
                        </th>
                        <th className="py-4 px-16">
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        items.map(item => {
                            return (
                                <tr className="border-b-2 border-beige">
                                    <td className="py-4 px-16">
                                        {item.name}
                                    </td>
                                    <td className="py-4 px-16">
                                        {item.quantity}
                                    </td>
                                    <td className="py-4 px-16">
                                        {item.price * item.quantity}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Cart;

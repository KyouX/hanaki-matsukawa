import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Trash from "../Iconos/Trash";
import OrderForm from "./OrderForm";

const Cart = () => {

    const [visibility, setVisibility] = useState(false);

    const { cartList: items, removeItem, clearCart } = useContext(CartContext);

    const acum = items.reduce((a, b) => a + b.quantity * b.price, 0)

    //Objeto Order
    const order = {}
    order.buyer = {}
    order.total = acum;
    order.items = items.map(cartItem => {
        const id = cartItem.id;
        const name = cartItem.name;
        const quantity = cartItem.quantity;
        const subtotal = cartItem.price * cartItem.quantity;

        return { id, name, quantity, subtotal }
    })


    return (
        <div className="">
            <div className="text-2xl font-bold font-paddington">
                Carrito de compras
            </div>
            {
                items.length > 0 ?
                    <div>
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
                                    items.map((item, i) => {
                                        return (
                                            <tr className="border-b-2 border-beige" key={i}>
                                                <td className="py-4 px-16">
                                                    {item.name}
                                                </td>
                                                <td className="py-4 px-16">
                                                    {item.quantity}
                                                </td>
                                                <td className="  text-right py-4 px-16">
                                                    S/ {item.price * item.quantity}
                                                    <button className="py-2 px-4 ml-8 bg-verdeclaro rounded-md shadow-sm font-bold" onClick={() => removeItem(item.id)}>
                                                        <Trash />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="flex my-4">
                            <div className="w-full py-2 bg-white text-lg text-center font-paddington rounded-md">
                                TOTAL: S/{acum}
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <button className="bg-verdeclaro py-2 px-4 w-1/3 rounded shadow-md hover:bg-verdemedio" onClick={() => setVisibility(true)}>
                                Finalizar compra
                            </button>
                            <OrderForm visible={visibility} setVisibility={setVisibility} order={order} clearCart={clearCart} />
                        </div>
                    </div> :
                    <div>
                        <div className="font-palosecomedium text-lg text-center">
                            Tu carrito está vacío.
                        </div>
                        <div>
                            <Link to={`/`}>
                                <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio">
                                    Ir a Home
                                </button>
                            </Link>

                        </div>
                    </div>
            }
        </div>
    )
}
export default Cart;

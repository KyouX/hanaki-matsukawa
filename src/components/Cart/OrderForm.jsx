import { useState } from "react";
import { addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";

const OrderForm = ({ visible, setVisibility, order, clearCart }) => {

    const [orderId, setOrderId] = useState('');
    const [buyer, setBuyer] = useState({
        name: '', phone: '', email: ''
    });

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const generarOrden = (e) => {
        e.preventDefault();

        order.date = Timestamp.fromDate(new Date());
        order.buyer = buyer;
        if (buyer.email !== buyer.confirmation || buyer.email === '' || buyer.name === '' || buyer.phone === '') {
            return;
        }
        //Firestore
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        //Agregar orden
        addDoc(orderCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                setBuyer({
                    name: '', phone: '', email: ''
                })
            })
    }

    return (
        <div>
            {visible && <div className="fixed flex inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                {orderId === '' ? <div className="relative m-auto bg-white w-2/3 p-12 rounded-md" onChange={handleChange} >
                    <div className="text-3xl font-paddington text-center mb-4">
                        Datos de contacto
                    </div>
                    <div className="pb-2 font-semibold">
                        Nombre
                    </div>
                    <input name="name" className="border w-full rounded-md py-2 px-4 mb-4" value={buyer.name} />
                    <div className="pb-2 font-semibold">
                        Correo
                    </div>
                    <input name="email" className="border w-full rounded-md py-2 px-4 mb-4" type="email" value={buyer.email} />
                    <div className="pb-2 font-semibold">
                        Correo nuevamente
                    </div>
                    <input className="border w-full rounded-md py-2 px-4 mb-4" type="email" name="confirmation" value={buyer.confirmation}>
                    </input>
                    <div className="pb-2 font-semibold">
                        Teléfono
                    </div>
                    <input name="phone" className="border w-full rounded-md py-2 px-4 mb-4" value={buyer.phone} />
                    <div className="flex flex-row space-x-4 w-full mt-4">
                        <button className="bg-gray-200 py-2 px-4 w-full rounded shadow-md hover:bg-gray-300" onClick={() => setVisibility(false)}>
                            Cancelar
                        </button>
                        <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio" onClick={generarOrden}>
                            Finalizar compra
                        </button>
                    </div>
                </div> : <div className="relative m-auto bg-white w-2/3 p-36 rounded-md">
                    <div className="font-paddington text-2xl text-center pb-6">
                        ¡Gracias por tu compra!
                    </div>
                    <div className="text-xl pb-14 text-center">
                        Este es tu código de pedido: {orderId}
                    </div>
                    <Link to={`/`} className="flex justify-center w-full">
                        <button className="bg-verdeclaro py-2 px-4 w-1/3 rounded shadow-md hover:bg-verdemedio" onClick={clearCart}>
                            Aceptar
                        </button>
                    </Link>
                </div>}
            </div>}
        </div>

    )
}

export default OrderForm;
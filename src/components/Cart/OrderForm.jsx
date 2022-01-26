import { useState } from "react";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const OrderForm = ({ visible, setVisibility, order, clearCart }) => {

    const [orderId, setOrderId] = useState('');
    const [buyer, setBuyer] = useState({
        name: '', phone: '', email: '', confirmation: ''
    });
    const [validationError, setValidationError] = useState({});

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    const generateOrder = (e) => {
        e.preventDefault();

        let error = false;
        const errors = {}

        if (!buyer.name.match(/^[a-z.\- áéíóúñ ]+$/gi)) {
            errors.name = true;
            error = true;
        } else {
            errors.name = false;
        }

        if (!buyer.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi)) {
            errors.email = true;
            error = true;
        } else {
            errors.email = false;
        }

        if (buyer.email !== buyer.confirmation) {
            errors.confirmation = true;
            error = true;
        } else {
            errors.confirmation = false;
        }

        if (!buyer.phone.match(/^[0-9+ ]+$/g)) {
            errors.phone = true;
            error = true;
        } else {
            errors.phone = false;
        }

        if (error) {
            setValidationError(errors);
            return;
        }

        //Firestore
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        //Add order
        addDoc(orderCollection, {
            ...order,
            date: Timestamp.fromDate(new Date()),
            buyer: { name: buyer.name, email: buyer.email, phone: buyer.phone }
        })
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
                {orderId === '' ? <div className="relative m-auto bg-white w-2/3 p-12 rounded-md" >
                    <div className="text-3xl font-paddington text-center mb-4">
                        Datos de contacto
                    </div>
                    <div className="pb-2 font-semibold">
                        Nombre
                    </div>
                    <input name="name" className="border w-full rounded-md pt-2 px-4 mb-2" value={buyer.name} onChange={handleChange} type="text" />
                    {
                        validationError.name && <div className="text-sm text-red-500 pb-2">Nombre inválido: ingrese solo letras y espacios</div>
                    }
                    <div className="pb-2 font-semibold">
                        Correo
                    </div>
                    <input name="email" className="border w-full rounded-md pt-2 px-4 mb-2" type="email" value={buyer.email} onChange={handleChange} />
                    {
                        validationError.email && <div className="text-sm text-red-500 pb-2">Ingrese un correo válido</div>
                    }
                    <div className="pb-2 font-semibold">
                        Correo nuevamente
                    </div>
                    <input className="border w-full rounded-md pt-2 px-4 mb-2" type="email" name="confirmation" value={buyer.confirmation} onChange={handleChange} />
                    {
                        validationError.confirmation && <div className="text-sm text-red-500 pb-2">Los correos deben ser iguales</div>
                    }
                    <div className="pb-2 font-semibold">
                        Teléfono
                    </div>
                    <input name="phone" className="border w-full rounded-md pt-2 px-4 mb-2" value={buyer.phone} onChange={handleChange} type="phone" />
                    {
                        validationError.phone && <div className="text-sm text-red-500 pb-2">Teléfono inválido: ingrese solo números</div>
                    }
                    <div className="flex flex-row space-x-4 w-full mt-4">
                        <button className="bg-gray-200 py-2 px-4 w-full rounded shadow-md hover:bg-gray-300" onClick={() => setVisibility(false)}>
                            Cancelar
                        </button>
                        <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio" onClick={generateOrder}>
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
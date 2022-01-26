import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item: { id, name, img, alt, stock, desc, price } }) => {

    const { addItem: addToContext} = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const addItem = (count) => {
        addToContext({ id: id, name: name, price: price, quantity: count })
        setAdded(true)
    }

    return (
        <div className={`flex flex-row w-1/2 mx-auto bg-white rounded-md shadow-md ${img ? '' : 'animate-pulse'}`}>
            <div className="w-7/12 p-8 flex items-center justify-center">
                {img ? <img className="rounded" src={img} alt={alt} /> : <div className="bg-verdeclaro w-full h-full rounded"></div>}
            </div>
            <div className="relative flex flex-col space-y-2 w-5/12 pr-8 pt-8 pb-48">
                <div className="flex flex-col divide-y-2 divide-verdeclaro space-y-2 w-full">
                    <div className="font-paddington text-4xl" >{name || "Cargando el producto"}</div>
                    <div className="flex flex-col space-y-4 pt-8 text-xl">
                        <div>{desc || "Cargando la descripción de tu producto"}</div>
                        <div className="text-5xl">S/{price || "-"}</div>
                    </div>

                </div>
                {img &&
                    <div className="absolute bottom-0 left-0 right-0 pb-8 pr-8">

                        {
                            !added
                                ?
                                <ItemCount stock={stock} initial={1} onAdd={addItem} />
                                :
                                <Link to="/cart">
                                    <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio">
                                        Finalizar compra
                                    </button>
                                </Link>
                        }
                    </div>
                }
            </div>
        </div>
    )

}
export default ItemDetail;



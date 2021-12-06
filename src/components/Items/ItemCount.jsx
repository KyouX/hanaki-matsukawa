import imgSet from '../../assets/img/set.PNG'
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    /*console.log(initial)*/
    const [count, setCount] = useState(initial);

    const restarCount = () => {
        if (count >= 2) {
            setCount(count - 1)
        }
    }

    const sumarCount = () => {
        if (count + 1 <= stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="flex flex-col w-80">
            <div>
                <img className="rounded shadow-md" src={imgSet} alt="set de matcha" />
            </div>
            <div className="px-4 py-2">
                <div className="flex flex-row w-full bg-white rounded border">
                    <button className="w-1/5 py-2 px-4" onClick={restarCount}>
                        -
                    </button>
                    <div className="w-3/5 flex items-center justify-center">
                        {count}
                    </div>
                    <button className="w-1/5 py-2 px-4" onClick={sumarCount}>
                        +
                    </button>

                </div>
            </div>
            <div className="px-4">
                <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio" onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
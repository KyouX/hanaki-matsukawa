import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const reduceCount = () => {
        if (count >= 2) {
            setCount(count - 1)
        }
    }

    const increaseCount = () => {
        if (count + 1 <= stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="py-2">
                <div className="flex flex-row w-full bg-white rounded border">
                    <button className="w-1/5 py-2 px-4" onClick={reduceCount}>
                        -
                    </button>
                    <div className="w-3/5 flex items-center justify-center">
                        {count}
                    </div>
                    <button className="w-1/5 py-2 px-4" onClick={increaseCount}>
                        +
                    </button>

                </div>
            </div>
            <div>
                <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio" onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
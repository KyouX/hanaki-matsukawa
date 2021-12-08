const Item = ({ item: { nombre, img, alt, desc, stock } }) => {
    return (
        <div className="flex flex-col w-80 bg-white rounded-md shadow-md relative">
            <div>
                <img className="rounded" src={img} alt={alt} />
            </div>
            <div className="p-4">
                <div className="text-center font-palosecomedium ">
                    {nombre}
                </div>
                <div className="mb-20">
                    {desc}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-right my-2">
                        Stock: {stock}
                    </div>
                    <div className="">
                        <button className="bg-verdeclaro py-2 px-4 w-full rounded shadow-md hover:bg-verdemedio">
                            Ver detalle
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Item;
import imgLeft from '../../assets/img/hanaki-left.webp'
import imgCenter from '../../assets/img/hanaki-center.webp'
import imgRight from '../../assets/img/hanaki-right.webp'
import ItemList from './ItemList'
import imgSet from '../../assets/img/set.PNG'
import imgMatcha from '../../assets/img/matcha.PNG'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting, categorized }) => {

    const [items, setItems] = useState([])
    const { id: category } = useParams();

    useEffect(() => {

        const obtenerDatos = new Promise((resolve, reject) => {
            const productos = [
                { id: "A01", nombre: "Set de matcha", img: imgSet, alt: "Set de matcha", desc: "Utensilios para preparar matcha de manera tradicional", stock: 15, category: "sets" },
                { id: "A02", nombre: "Guía de meditación", img: imgCenter, alt: "Guía de meditación", desc: "Libro de meditación guiada", stock: 25, category: "meditacion" },
                { id: "A03", nombre: "Matcha tres variedades", img: imgMatcha, alt: "3 Variedades de matcha", desc: "Matcha Jade, Matcha Ceremonial y Matcha Clásico", stock: 100, category: "matcha" }
            ]
            if (categorized && category) {
                setTimeout(() => {
                    resolve(productos.filter(producto => producto.category === category))
                }, 2000);
            }else if (!categorized){
                setTimeout(() => {
                    resolve(productos)
                }, 2000);
            }else{
                resolve([])
            }

        });
        obtenerDatos.then(setItems)
    }, [category])

    return (
        <div className="flex flex-col px-4 py-32 w-full h-full md:px-8">
            <div className="flex flex-col space-y-8 mx-auto my-auto ">
                <div className="font-palosecomedium text-center text-3xl">
                    {greeting}
                </div>
                {/*
                <div className="grid grid-cols-3 max-w-5xl gap-2 md:gap-4">
                    <img className="shadow-md rounded md:shadow-lg" src={imgLeft} alt="Imagen Hanaki Izquierda"/>
                    <img className="shadow-md rounded md:shadow-lg" src={imgCenter} alt="Imagen Hanaki Centro"/>
                    <img className="shadow-md rounded md:shadow-lg" src={imgRight} alt="Imagen Hanaki Derecha"/>
                </div>
                */}
                <div className="w-full flex items-center justify-center">
                    {items.length > 0 ? <ItemList items={items} /> : "...Obteniendo la info de los productos (:"}
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;
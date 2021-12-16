import imgCenter from '../../assets/img/hanaki-center.webp'
import imgSet from '../../assets/img/set.PNG'
import imgSetDetail from '../../assets/img/setdetail.PNG'
import imgMatcha from '../../assets/img/matcha.PNG'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const getItem = (id) => {


    const items = [
        { id: "A01", nombre: "Set de matcha", img: imgSetDetail, alt: "Set de matcha", desc: "Utensilios para preparar matcha de manera tradicional", stock: 15, precio: 90 },
        { id: "A02", nombre: "Guía de meditación", img: imgCenter, alt: "Guía de meditación", desc: "Libro de meditación guiada", stock: 25, precio: 90 },
        { id: "A03", nombre: "Matcha tres variedades", img: imgMatcha, alt: "3 variedades de Matcha", desc: "Matcha Jade, Matcha Ceremonial y Matcha Clásico", stock: 100, precio: 200 },
        { id: "A04", nombre: "Guía de meditación", img: imgCenter, alt: "Guía de meditación", desc: "Libro de meditación guiada", stock: 25, precio: 90 },
        { id: "A05", nombre: "Set de matcha", img: imgSet, alt: "Set de matcha", desc: "Utensilios para preparar matcha de manera tradicional", stock: 15, precio: 90 }
    ]

    const obtenerDatos = new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = items.filter(item => item.id === id)[0];
            resolve(item)
        }, 2000);
    });
    return obtenerDatos;
}

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState(false);

    useEffect(() => {
        if (id) getItem(id).then(setItem)
    }, [id])


    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;
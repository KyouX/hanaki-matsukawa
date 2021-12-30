//import imgLeft from '../../assets/img/hanaki-left.webp'
//import imgCenter from '../../assets/img/hanaki-center.webp'
//import imgRight from '../../assets/img/hanaki-right.webp'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting, categorized }) => {

    const [items, setItems] = useState([])
    const { id: category } = useParams();

    useEffect(() => {

        const db = getFirestore();

        const itemsCollection = collection(db, "items");

        if (categorized && category) {
            const q = query(itemsCollection, where("category", "==", category));
            getDocs(q)
                .then(querySnapshot => setItems(querySnapshot.docs.map(item => ({ id: item.id, ...item.data() }))))

        } else if (!categorized) {
            getDocs(itemsCollection)
                .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        } else {
            setItems([]);
        }



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
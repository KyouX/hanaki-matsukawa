import imgCenter from '../../assets/img/hanaki-center.webp'
import imgSet from '../../assets/img/set.PNG'
import imgSetDetail from '../../assets/img/setdetail.PNG'
import imgMatcha from '../../assets/img/matcha.PNG'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDoc, getFirestore, query, where, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        if (id) {
            const db = getFirestore();

            const itemsCollection = doc(db, "items", id);
            //const q = query(itemsCollection, where("id", "==", id));
            getDoc(itemsCollection)
                .then(item => setItem({ id: item.id, ...item.data() }))
        }
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;
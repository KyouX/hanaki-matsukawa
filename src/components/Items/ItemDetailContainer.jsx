import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        if (id) {
            const db = getFirestore();
            const itemsCollection = doc(db, "items", id);
            getDoc(itemsCollection)
                .then(item => setItem({ id: item.id, ...item.data() }))
        }
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;
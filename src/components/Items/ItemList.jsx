import Item from './Item';

const ItemList = ({ items }) => {

    return (
        <div className="grid grid-cols-3 gap-10">
            {items.map((item) => {
                return <Item item={item} />
            })}
        </div>

    )
}

export default ItemList;
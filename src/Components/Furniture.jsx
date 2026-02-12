import FurnitureItem from "./FurnitureItem";

function Furniture({ itemsForFurniture }) {
    return (
        <div className="products">
            {itemsForFurniture.map((item) => (
                <FurnitureItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Furniture;
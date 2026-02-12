import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';

function FurnitureItem({ item }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { name, price, image } = item;

    return (
        <div className="product-card">
            <img src={image} alt='furniture' />
            <div className="product-info">
                <h3>{name}</h3>
                <h4>$ {price}</h4>
                <div className="quantity-selector">
                    <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>
                <button 
                    className="change" 
                    onClick={() => dispatch(addItemToCart({ ...item, quantity }))}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default FurnitureItem;
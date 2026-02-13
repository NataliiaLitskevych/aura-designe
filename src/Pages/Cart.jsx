import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, getTotalPrice, removeItemFromCart, incrementQuantity, decrementQuantity, clearCart } from '../Redux/cartSlice';

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = () => {
        alert("Thank you for your purchase! Your order is being processed. 📦");
        dispatch(clearCart());
        navigate("/");
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your cart is empty 🪑</h2>
                <p>Go back to the shop to find your perfect furniture.</p>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-card">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <div className="quantity-selector">
                                <button onClick={() => dispatch(decrementQuantity({ itemId: item.id }))}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(incrementQuantity({ itemId: item.id }))}>+</button>
                            </div>
                            <p>Price per unit: ${item.price}</p>
                            <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
                            
                            <button 
                                className="delete-btn" 
                                onClick={() => dispatch(removeItemFromCart({ itemId: item.id }))}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="cart-total">
                <h2>Total Amount: ${totalPrice}</h2>
                <button 
                    className="change active" 
                    onClick={handleCheckout} >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart;
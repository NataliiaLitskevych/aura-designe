import { useState, useEffect } from "react"; 
import Buttons from "../Components/Buttons";
import Furniture from "../Components/Furniture";
import { data } from "../Data/data";
import '../CSS/Shop.css'
import "../Loader.css"; 

function Shop() {
    const [items, setItems] = useState(data);
    const [currentSearch, setCurrentSearch] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); 
        return () => clearTimeout(timer);
    }, []);

    const handleCategoryChange = (category) => {
        if (category === 'all') {
            setItems(data);
        } else {
            const newItems = data.filter(element => element.searchTerm === category);
            setItems(newItems);
        }
        setCurrentSearch(category);
    }

    return (
        <div className="shop-wrapper">
            <div className="logo">
                <h1>AURA DESIGN</h1>
                <h3>Free Standard Shipping</h3>
            </div>
            
            <Buttons 
                chosenCategory={handleCategoryChange} 
                currentSearch={currentSearch} 
            />

            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <Furniture itemsForFurniture={items} />
            )}
        </div>
    )
}

export default Shop;
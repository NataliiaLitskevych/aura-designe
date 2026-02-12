import { useState, useEffect } from "react"; 
import Buttons from "../Components/Buttons";
import Furniture from "../Components/Furniture";
import { data } from "../Data/data";
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

    const chosenCategory = (category) => {
        const newItems = data.filter(element => element.searchTerm === category);
        setItems(newItems);
        setCurrentSearch(category);
    }

    const showAll = () => {
        setItems(data);
        setCurrentSearch('all');
    }

    return (
        <div className="shop-wrapper">
            <div className="logo">
                <h1>AURA DESIGNE</h1>
                <h3>Free Standard Shipping</h3>
            </div>
            
            <Buttons 
                chosenCategory={chosenCategory} 
                setItems={showAll} 
                allData={data} 
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
function Buttons({ chosenCategory, setItems, allData, currentSearch }) {
    
    return (
        <div className="cont">
            <button 
                className={`change ${currentSearch === 'all' ? 'active' : ''}`} 
                onClick={() => { setItems(allData);}}>
                All
            </button>
            
            <button 
                className={`change ${currentSearch === 'chair' ? 'active' : ''}`} 
                onClick={() => chosenCategory("chair")}>
                Chairs
            </button>
            
            <button 
                className={`change ${currentSearch === 'table' ? 'active' : ''}`} 
                onClick={() => chosenCategory("table")}>
                Tables
            </button>
            
            <button 
                className={`change ${currentSearch === 'lighting' ? 'active' : ''}`} 
                onClick={() => chosenCategory("lighting")}>
                Lighting
            </button>
            
            <button 
                className={`change ${currentSearch === 'closet' ? 'active' : ''}`} 
                onClick={() => chosenCategory("closet")}>
                Closet
            </button>
        </div>
    )
}
export default Buttons;
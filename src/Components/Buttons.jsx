function Buttons({ chosenCategory, currentSearch }) {
  
  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Chairs', value: 'chair' },
    { name: 'Tables', value: 'table' },
    { name: 'Lighting', value: 'lighting' },
    { name: 'Closet', value: 'closet' }
  ];

  return (
    <div className="cont">
      {categories.map((category) => (
        <button
          key={category.value}
          className={`change ${currentSearch === category.value ? 'active' : ''}`}
          onClick={() => { chosenCategory(category.value) }}>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
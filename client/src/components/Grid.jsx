// Grid.js
import React, { useContext } from 'react';
import axios from 'axios'
import WardrobeContext from '../contexts/WardrobeContext'

const Grid = () => {
  const { wardrobe, updateWardrobeItem } = useContext(WardrobeContext);

  console.log("wardrobe: ", wardrobe)
  const decrementWearCount = async (itemId) => {
    try {
      await updateWardrobeItem(itemId, wardrobe.find(item => item._id === itemId).wearCount - 1);
    } catch (error) {
      console.error("Error decrementing wear count:", error);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-6 p-6 text-black">
      {wardrobe.map((item) => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={'https://via.placeholder.com/400x300'} alt={`Image for ${item.clothType}`} className="w-full h-64 object-cover" />
          <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-2">{item.clothType}</h2>
              <p>ID: {item._id}</p>
              <p className="mb-4">Wear Count: {item.wearCount}</p>
              {/* Add more details here */}
            </div>
            <div className="flex justify-between items-center space-x-4">
              <button onClick={() => decrementWearCount(item._id)} className="btn btn-sm btn-outline btn-primary">
                -
              </button>
              <button onClick={() => incrementWearCount(item._id)} className="btn btn-sm btn-primary">
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;

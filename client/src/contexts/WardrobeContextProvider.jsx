import React, { createContext, useState, useEffect } from 'react'
import WardrobeContext from './WardrobeContext'
import axios from 'axios'

const WardrobeContextProvider = ({ children }) => {
    const [txCompletedCount, setTxCompletedCount] = useState(0)
    const [wardrobe, setWardrobe] = useState([]);

    useEffect(() => {
        const fetchWardrobe = async () => {
        try {
            const response = await axios.get("http://localhost:8000/cloth");
            setWardrobe(response.data.data);
        } catch (error) {
            console.error("Error fetching wardrobe:", error);
        }
        };

        fetchWardrobe();
    }, []);

    const updateWardrobeItem = async (itemId, wearCount) => {
        try {
          const updatedItem = { _id: itemId, wearCount };
          await axios.patch(`http://localhost:8000/cloth/${itemId}`, updatedItem);
          // Fetch the updated wardrobe
          const updatedWardrobe = await axios.get("http://localhost:8000/cloth");
          setWardrobe(updatedWardrobe.data);
        } catch (error) {
          console.error("Error updating wardrobe item:", error);
        }
      };

    return (
        <WardrobeContext.Provider
            value={{
                txCompletedCount,
                wardrobe, 
                updateWardrobeItem
            }}
        >
            {children}
        </WardrobeContext.Provider>
    )
}

export default WardrobeContextProvider
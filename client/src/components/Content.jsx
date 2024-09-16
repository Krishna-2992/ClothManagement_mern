import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from './Grid'

const Content = () => {

    const [clothes, setClothes] = useState([])

    useEffect(()=>{
        const getClothes = async () => {
            console.log("inside getClothes")
            const res = await axios.get("http://localhost:8000/cloth");
            setClothes(res.data.data);
            console.log(res.data.data)
        }
        getClothes()
    }, [])

    const columns = ['clothType', 'color', 'wearCount', 'photoUrl'];

  return (
    <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Your Wardrobe</h1>
        <Grid items={clothes} />
    </div>
  )
}

export default Content
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Food from '../components/Food'
import Axios from '../static/Axios'
import { useParams} from "react-router-dom"; 

function Viewcategorypage() {
  let { id } = useParams(); 
  const [Foods, setFoods] = useState([])
    useEffect(() => {
     try {
      Axios.get(`FoodmenuCategoryView/${id}`).then((response)=>{
        console.log(response.data)
        setFoods(response.data)
    })
     } catch (error) {
      
     }
    }, [])
    
  
    
  return (
    <div>
      <Header/> <br /><br />

      <Food Foods={Foods}/>
    </div>
  )
}

export default Viewcategorypage
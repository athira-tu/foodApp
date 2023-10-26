import React, { useEffect, useState } from 'react'
import Axios from '../static/Axios'
import './category.css'
import { imgUrl } from '../static/Urls'
import {  useNavigate } from 'react-router-dom'




function Catrgories() {
    const [category, setcategory] = useState([])
    const navigate=useNavigate()
                    useEffect(() => {
                        //axios call 
                        Axios.get("ViewCategory").then((response)=>{
                            console.log(response.data)
                            setcategory(response.data)
                        })
                    }, [])
                    const getId=(id)=>{
                            console.log(id)
                            navigate(`/category/${id}`)
                    }
      
    return (
    <div>
        < h1 className='category-head'>What's On Your Mind?</h1>
        <div className='category-main'>
              
              {
                category.map((obj)=>{
                    return(
                        <>
                            <div className='fd-div1 fd-div2'>
                                    <div className='pizza'>
                                            <img className='pizza-img' src= { obj ? imgUrl + obj.category_image : ""} alt="" />
                                    </div>
                                        <div className='item1'>
                                            <div className='head3' >
                                        <h2 >{obj ? obj.foodcategory_name :""}</h2>
                                        </div>
                                        {/* <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> */}
                                        </div>
                                        <div className='btn-div'>
                                            <button className='btn1' onClick={()=>getId(obj.id)}>View</button>
                                        </div>
                                    </div>      
                        </>
                    )
                })
              }
        


    </div>
    </div>
  )
}

export default Catrgories
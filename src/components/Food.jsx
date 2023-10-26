import React from 'react'
import './food.css'
import { imgUrl } from '../static/Urls';

function Food(props) {
    const { Foods } = props;

  return (
    <div className='fd-main'>
        {
            Foods ? 
            Foods.map((obj)=>{
                return(
                    <>
        <div className='fd-div1'>
            <div className='pizza'>
                <img className='pizza-img' src={imgUrl+obj.food_image} alt="" />
               
            </div>
            <div className='item1'>
            <h2 >{obj.foodname}</h2>
            <p className='para'>{obj.food_description}</p>
            </div>
            <div className='btn-div'>
                <h2>₹{obj.food_price}</h2>
                <button className='btn1'>Order Now</button>
            </div>
        </div>
       
                    </>
                )
            }) : ""
        }
        
      
       
        
        
        
        
        
    </div>
  )
}

export default Food
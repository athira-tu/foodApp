import React from 'react'
import './centerdiv.css'

function Centerdiv() {
  return (
    <div className='main'>
        <div className='Text'>
            <div  className='head'>
            <h1>All happiness <br /> depends on a<br />
                 <span className='span'> leosurely Dinner </span> </h1>
                 </div>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit <br />. Iure,dignissimos praesentium hic omnis <br /> facere magni cumque ea </p>
            <div className='Btn-div'>
            <button className='orderbtn'>order now</button>
            <h2 className='ten'>$10.54</h2>
            </div>
            
        </div>
<div className='image'>
    <img className='img' src=".\food-removebg-preview.png" alt="" />
</div>
    </div>
  )
}

export default Centerdiv
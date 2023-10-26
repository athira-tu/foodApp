import React from 'react'
import "./detailedview.css"

function Detailedview() {
  return (
    <div>
        <div className='top'>
            <div className='img-main' >
                <img className='img-food' src=".\pizza-removebg-preview.png" alt="" />
                
            </div>
            <div className='description'>
<h1 className='head1'>Margerita pizza</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam dolorem consequatur odio a delectus eius fugiat cum esse. Officia amet enim reiciendis ut a ab? Aspernatur fuga impedit maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe beatae nostrum eveniet quidem impedit inventore possimus unde ipsum qui modi sit fugiat, molestias sapiente, repudiandae vero officia natus adipisci.</p>
<div className='size-btn'>
  <button className='size'>S</button>
  <button className='size'>M</button>
  <button className='size'>L</button>
</div>
            </div>
        </div>
        <div className='btn1-div'>
<button className='button1'>Order Now</button>
<button className='button2'>wish list</button>
        </div>
    </div>
  )
}

export default Detailedview
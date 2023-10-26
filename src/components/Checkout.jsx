import React from 'react'
import './checkout.css' 
import { GiCancel } from 'react-icons/gi';

function Checkout() {
  return (
    <div className='check-main'>
     
       
    <div className='check-div'>
        <div className='check'>
          <div className='count-btndiv'>
              <button className='cntrl-btn'>+</button>
              <h3 className='cnt'>1</h3>
              < button className='cntrl-btn'>-</button>
          </div>
          <div className='img-div'>
            <img className="check-img" src=".\pizza-removebg-preview.png" alt="" />
          </div>
            <div className='item'>
                <h3 className='check-dish'>margerita pizza</h3>
                <h3 className='price'>230/-</h3>
            <div className='check-box'>
              <div className='ch-bx'>
                <input type="checkbox" />
                  <label htmlFor="">regular</label> 
                  </div>
                  <div className='ch-bx'>
                  <input type="checkbox" />
                  <label htmlFor="">large</label>
                </div>
            </div>

            </div>


<div className='icn'>

            <GiCancel style={{ color: 'red' }} />

</div>
        </div>
        <div className='check'>

        </div>
        <div className='check'>

        </div>
    </div>
    <div className='billing'>
      <div className='parent-total'>
      <div className='total'>
         <p className='para1'>carttotal</p>
         <p className='para1'>tax</p>
         <p className='para1'>Delivery</p>
         <p className='para1'>Promo discount</p>
         </div>
         <div className='money'>
          <p>234.50</p>
          <p>234.50</p>
          <p>234.50</p>
          <p>234.50</p>
         </div>
      </div>
      <div className='border-item'></div>
      <div className='sub-total'>
        <p className='para1'>Subtotal</p>
        <h3>345.50</h3>
      </div>
      <button className='proceed-btn'>Proceed to checkout</button>
    </div>
   
    </div>
  )
}

export default Checkout
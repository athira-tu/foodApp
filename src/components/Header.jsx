import React from 'react'
import './Header.css'
import { FaSearch } from 'react-icons/fa';
// import { AiFillNotification} from 'react-icons/fa';


function Header() {
  return (
    <div className='Header'>
            <div className='logo'> <p>E-servant</p> </div>
            <div className='center-item'> 
               <p>Home</p>
               <p>Products</p>
               <p>Explore</p>
               <p>Menu</p>
            </div>
            <div className='icons'> 
                <FaSearch/>
                {/* <AiFillNotification/> */}
               

                 </div>
    </div>
  )
}

export default Header
import React from 'react'

import './style.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
      <p>Color</p>
        <ul className='color'>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Red</span>
          </li>

          <li className='list'>
            <input type='checkbox'/> 
            <span>Blue</span>
          </li>

          <li className='list'>
            <input type='checkbox'/> 
            <span>Green</span>
          </li>
        </ul>

        <p>Gender</p>
        <ul className='gender'>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Men</span>
          </li>

          <li className='list'>
            <input type='checkbox'/> 
            <span>Women</span>
          </li>
        </ul>

        <p>Price</p>
        <ul className='price'>
          <li className='list'>
            <input type='checkbox'/> 
            <span>0-Rs250</span>
          </li>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Rs250-450</span>
          </li>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Rs450</span>
          </li>
        </ul>

        <p>Type</p>
        <ul className='type'>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Polo</span>
          </li>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Hoodie</span>
          </li>
          <li className='list'>
            <input type='checkbox'/> 
            <span>Basic</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

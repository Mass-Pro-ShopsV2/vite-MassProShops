import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='pagenotfoundDiv'>
      <Link to='/home' className='pagenotfoundImage'>
        <img className='pagenotfoundImage'
        src='/images/404.png' 
        alt=''/>
      </Link>
    </div>
  )
}

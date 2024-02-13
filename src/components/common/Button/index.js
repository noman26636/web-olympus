import React from 'react'
import './index.css'
import forwardArrow from '../../../assets/forwardArrow.png'

function Button({ forwardIcon, children, ...restProps }) {
  return (
    <button {...restProps} className='button_container'>{children} {forwardIcon && <img src={forwardArrow} alt='ForwardArrow' />} </button>
  )
}

export default Button
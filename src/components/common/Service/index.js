import React from 'react'
import './index.css'
import {ReactComponent as ForwardArrow } from '../../../assets/whatWeDo/forwardArrow.svg'

function CoreService({ name, count }) {
  return (
    <div className='core_service_container'>
        <h6>0{count}.</h6>
        <div className='service_wrapper'>
        <h1>{name}</h1>
        <ForwardArrow className='forwardArrow' />
        </div>
        <div className='border_bottom' />
    </div>
  )
}

export default CoreService
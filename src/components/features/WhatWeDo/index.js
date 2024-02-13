import React from 'react';
import './index.css'
import CoreService from '../../common/Service';
import title from '../../../assets/whatWeDo/title.png';

const coreServices = ['Web Design', 'Website resdesign', 'Development', 'SEO']

function WhatWeDo() {
  return (
    <div style={{ color: 'black', position: 'absolute', top: '250vh', width: '100%', height: '100vh' }}>
      <div className='wrapper'>
        <h5>WHAT WE DO</h5>
        <img src={title} alt='Title' />
      </div>
      {coreServices.map((service, index) => (
      <CoreService name={service} count={index+1} />
      ))}
    </div>
  );
}

export default WhatWeDo;

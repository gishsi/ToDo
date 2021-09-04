import React from 'react';
import './Weather.scss';

import { FaSun } from 'react-icons/fa';
export default function Weather() {
  return (
    <div className='weather-container'>
      <div className='weather'>
        <h1 className='icon'>
          <FaSun />
        </h1>
        <h3 className='temp'>19°C</h3>
      </div>
    </div>
  );
}

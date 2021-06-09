import React from 'react';
import Label from './Label';
import './css/Form-style.css';
// import '../css/main.css';

const Range = () => {
  return (
    <div className='Range'>
      <Label label={'choose range'} />
      <input type='range' min='0' max='10' step='1' />
    </div>
  );
};

export default Range;

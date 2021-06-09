import React from 'react';
import Label from './Label';
import './css/Form-style.css';
// import '../css/main.css';

const RadioButton = () => {
  return (
    <div className='Radio-button'>
      <Label label={'choose gender'} />
      <input type='radio' value='Male' name='Gender' /> Male
      <input type='radio' value='Female' name='Gender' /> Female
      <input type='radio' value='Other' name='Gender' /> Other
    </div>
  );
};

export default RadioButton;

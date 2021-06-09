import React from 'react';
import Label from './Label';
import './css/Form-style.css';
// import '../css/main.css';

const InputText = () => {
  return (
    <div className='Input-text'>
      <form action=''>
        <Label label={'enter text'} />
        <input
          className='Input'
          type='text'
          placeholder='Enter some text here'
        />
      </form>
    </div>
  );
};

export default InputText;

import React from 'react';
import Label from './Label';
import './css/Form-style.css';

const InputFile = () => {
  return (
    <div className='Input-File'>
      <form action=''>
        <Label label={'choose file'} />
        <input className='Input-file' type='file' />
      </form>
    </div>
  );
};

export default InputFile;

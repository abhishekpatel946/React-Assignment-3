import React from 'react';
import './css/Form-style.css';

const Label = (props) => {
  return (
    <div className='Label'>
      <label>{props.label}</label>
    </div>
  );
};

export default Label;

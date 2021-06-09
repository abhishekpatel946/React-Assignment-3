import React from 'react';
import './css/Form-style.css';
// import '../css/main.css';

const Label = (props) => {
  return (
    <div className='Label'>
      <label>{props.label}</label>
    </div>
  );
};

export default Label;

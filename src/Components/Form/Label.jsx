import React from 'react';
import PropTypes from 'prop-types';
import './css/Form-style.css';

const Label = (props) => {
  // typechecking with propTypes
  Label.propTypes = {
    label: PropTypes.string,
  };

  return (
    <div className='Label'>
      <label>{props.label}</label>
    </div>
  );
};

export default Label;

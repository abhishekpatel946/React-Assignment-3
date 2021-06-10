import React from 'react';
import DateUtils from '../Utils/DateUtil';
import InputText from '../Components/Form/InputText';
import InputFile from '../Components/Form/InputFile';
import Options from '../Components/Form/Options';
import RadioBtn from '../Components/Form/RadioButton';
import Range from '../Components/Form/Range';
import './layout-style.css';

const LayoutContainer = () => {
  return (
    <div className='Layout-heading'>
      <h2>React Form</h2>
      <div className='Layout-container'>
        <InputText />
        <InputFile />
        <DateUtils />
        <Options />
        <RadioBtn />
        <Range />
      </div>
    </div>
  );
};

export default LayoutContainer;

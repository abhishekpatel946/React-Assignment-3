import React from 'react';
import DateUtils from '../Utils/DateUtil';
import InputText from '../Form/InputText';
import InputFile from '../Form/InputFile';
import Options from '../Form/Options';
import RadioBtn from '../Form/RadioButton';
import Range from '../Form/Range';
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

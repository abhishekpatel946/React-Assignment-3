import React from 'react';
import Label from './Label';
import './css/Form-style.css';

const Options = () => {
  return (
    <div className='Options'>
      <form>
        <Label label={'choose option'} />
        <select className='Option-select' name='Select'>
          <option className='Option-select-option' value='op1'>
            Option1
          </option>
          <option className='Option-select-option' value='op1'>
            Option2
          </option>
          <option className='Option-select-option' value='op1'>
            Option3
          </option>
        </select>
      </form>
    </div>
  );
};

export default Options;

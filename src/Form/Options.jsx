import React from 'react';
import Label from './Label';
import './css/Form-style.css';
// import '../css/main.css';

const Options = () => {
  return (
    <div className='Options'>
      <form>
        <Label label={'choose option'} />
        <select className='Option-select' name='Select'>
          <option value='op1'>Option1</option>
          <option value='op1'>Option2</option>
          <option value='op1'>Option3</option>
        </select>
      </form>
    </div>
  );
};

export default Options;

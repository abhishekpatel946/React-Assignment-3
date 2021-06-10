import React from 'react';
import Label from '../Components/Form/Label';

const DateUtil = () => {
  // date method for current localDate (dd-mm-yyyy)
  const today = new Date().toLocaleDateString();

  return (
    <div className='Date'>
      <Label label={"today's date"} />
      <h3 className='Date-heading'>{today}</h3>
    </div>
  );
};

export default DateUtil;

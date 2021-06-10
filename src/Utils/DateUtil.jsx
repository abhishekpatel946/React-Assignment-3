import React, { useState, useEffect } from 'react';
import Label from '../Components/Form/Label';

const DateUtil = () => {
  // state for current Date
  const [today, setToday] = useState('');

  // handle the date change
  useEffect(() => {
    // date method for current localDate (dd-mm-yyyy)
    setToday(new Date().toLocaleDateString());
  }, []);

  return (
    <div className='Date'>
      <Label label={"today's date"} />
      <h3 className='Date-heading'>{today}</h3>
    </div>
  );
};

export default DateUtil;

import React from 'react';
import './Day.scss';
function Day() {
  let dateObj = new Date();

  return (
    <div className='date'>
      <div>
        <h4 className='weekdayName'>
          {dateObj
            .toLocaleDateString('default', { weekday: 'long' })
            .toLowerCase()}
        </h4>
        <h1 className='weekdayDay'>{dateObj.getDate()}</h1>
        <h4 className='weekdayMonth'>
          {dateObj
            .toLocaleDateString('default', { month: 'long' })
            .toLowerCase()}
        </h4>
      </div>
    </div>
  );
}

export default Day;

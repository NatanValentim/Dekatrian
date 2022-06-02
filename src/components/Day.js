import React from 'react'
import DekatrianDate from '../services/DekatrianDate'
import DayContent from './DayContent';

const Day = ({ monthDay, day }) => {
  const today = DekatrianDate().date;

  const isToday = () => today === monthDay;
  // const isToday = () => ({
  //   fontWeight: today === monthDay ? 'bold' : 'normal',
  //   textDecoration: today === monthDay ? 'underline' : 'normal',
  // });

  return (
    <div className='day' style={{
      backgroundColor: day.color,
      ...isToday(),
    }}>
      <span className={isToday() ? 'today' : ''}>{monthDay}</span>
      <DayContent />
    </div>
  )
}

Day.propTypes = {}

export default Day
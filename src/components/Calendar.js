import React from 'react';
import { weekDays, weeks } from '../util/consts'
import Day from './Day';

const Calendar = ({apiCalendar}) => {
  let monthDay = 1;

  console.log(apiCalendar)

  try {
    apiCalendar.setCalendar(apiCalendar.calendar);
    apiCalendar.listUpcomingEvents(1)
      .then(res => {
        console.log(res)
      });
  } catch (error) {
    console.log(error)
  }

  return (
    <table style={{width: '-webkit-fill-available'}}>
      <tbody>
        <tr>
          {weekDays.map(({ name, color }) => <th key={name}>{name}</th>)}
        </tr>
        {weeks.map((week, i) => <tr key={i}>
          {weekDays.map((day, j) =>
            <td key={j}><Day monthDay={monthDay++} day={day} /></td>)}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Calendar
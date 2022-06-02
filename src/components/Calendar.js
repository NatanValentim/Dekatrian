import { weekDays, weeks } from '../util/consts'
import Day from './Day';

const Calendar = () => {
  let monthDay = 1;

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
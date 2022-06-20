import React, { Component } from 'react'
import DekatrianDate from '../services/DekatrianDate'

export class Header extends Component {
  render() {
    const date = new Date();

    const gregorianDate = () => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    return (
      <>
        <h3>📆
          {DekatrianDate().date} {DekatrianDate().month} {DekatrianDate().year}
        </h3>
        <h4>
          ({gregorianDate()})
        </h4>
      </>
    )
  }
}

export default Header
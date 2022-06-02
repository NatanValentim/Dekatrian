import React, { Component } from 'react'
import DekatrianDate from '../services/DekatrianDate'

export class Header extends Component {
  render() {
    return (
      <h3>📆
        {DekatrianDate().date} {DekatrianDate().month} {DekatrianDate().year}
      </h3>
    )
  }
}

export default Header
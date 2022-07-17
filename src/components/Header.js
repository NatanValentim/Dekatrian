import React, { Component } from 'react'
import DekatrianDate from '../services/DekatrianDate'

const Header = ({apiCalendar}) => {
  const date = new Date();

  const gregorianDate = () => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }

  const handleItemClick = (event, name) => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  }

  return (
    <>
      <h3>
        📆 {DekatrianDate().date} {DekatrianDate().month} {DekatrianDate().year}
      </h3>
      <h4>
        ({gregorianDate()})
      </h4>
      <button onClick={(e) => handleItemClick(e, 'sign-in')} >
        sign-in
      </button>
      <button onClick={(e) => handleItemClick(e, 'sign-out')} >
        sign-out
      </button>
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
    </>
  )
}

export default Header
import './App.css';
import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Calendar from './components/Calendar';
import Header from './components/Header';

const config = {
  "clientId": "867314714036-e8d7jv0ictu9am5t53466mpnce6r03kf.apps.googleusercontent.com",
  "apiKey": "AIzaSyCWJ-kzfKrNBIiPGZKODpHy1f47LH9qNuw",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)

function App() {
  return (
    <div className="App">
      <Header apiCalendar={apiCalendar}></Header>
      <Calendar apiCalendar={apiCalendar}></Calendar>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import DoctorSearchForm from './components/doc';
import HospitalSearch from './components/HospitalSearch';
import Help from './components/Help';
import ChatBotPopup from './components/ChatBotPopup'; // import here

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>Healthcare Chatbot</h1>
        <nav>
          <ul>
            <li onClick={() => setSelectedOption('option1')}>Check diagnosis</li>
            <li onClick={() => setSelectedOption('option2')}>Search Doctor</li>
            <li onClick={() => setSelectedOption('option3')}>Search Hoapital</li>
            <li onClick={() => setSelectedOption('option4')}>Get Help</li>
          </ul>
        </nav>
      </header>
      {selectedOption === 'option1' ? <HomePage /> : null}

        <div className='main_me'>
          {/* <p className='body_head'>In this page we connect you with Health-Support.</p> */}
            {selectedOption === 'option2' ? <DoctorSearchForm /> : null}
            {selectedOption === 'option3' ? <HospitalSearch /> : null}
            {selectedOption === 'option4' ? <Help /> : null}
        </div>
        <ChatBotPopup /> {/* add chat bot component */}
    </div>   
  );

}

export default App;
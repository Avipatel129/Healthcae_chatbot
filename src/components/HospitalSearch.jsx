import React, { useState } from 'react';
import axios from 'axios';
import "./doc.css";
import "./help.css";



const HospitalSearch = () => {
  const [location, setLocation] = useState('');
  const [hospital, setHospital] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/getHospital', { location });
      setHospital(response.data);
    } catch (error) {
      console.error('Error fetching Hospital', error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} class='form_hospital'>

      <div>
      <label>
          Location:
      </label>
      </div>
      <div>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='enter city here...'/>
      </div>        
        <button type="submit" className='submit_hos'>Search</button>
      </form>
      <h2>Hospitals</h2>
      <ul>
        {hospital.map((hos, index) => (
          <li key={index}>{hos.hospital_name}, {hos.location} , {hos.specialty}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalSearch;
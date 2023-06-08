import React, { useState } from 'react';
import axios from 'axios';
import "./doc.css";


const DoctorSearchForm = () => {
  const [speciality, setSpeciality] = useState('');
  const [city, setCity] = useState('');
  const [doctors, setDoctors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/getDoctors', { speciality, city });
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors', error);
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='doc_form'>       
          <div>
            <div>
              <label className=''>
                Speciality:
              </label>
            </div>
            <div>
              <input type="text" className='input_doc'placeholder='enter speciality here...' value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
            </div>
          </div>

          <div>
            <div>
              <label className=''>
                City:
              </label>
            </div>
            <div>
              <input type="text" className='input_doc'placeholder='enter location here...' value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          <div>
          <button type="submit" className='submit_doc'>Search</button>
          </div>
         
      </form>
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>{doctor.name}, {doctor.mobile} , {speciality}, {city}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorSearchForm;
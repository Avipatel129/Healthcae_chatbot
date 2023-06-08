const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');

const app = express();

app.use(cors());
app.use(express.json());

let doctors;
let hospital;
// Load the Excel data when the server starts
const loadExcelData = () => {
  const workbook = xlsx.readFile('doctors.csv');// replace with your actual file path
  const sheet_name_list = workbook.SheetNames;
  doctors = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  const workbook1 = xlsx.readFile('hospital.csv');// replace with your actual file path
  const sheet_name_list1 = workbook1.SheetNames;
  hospital = xlsx.utils.sheet_to_json(workbook1.Sheets[sheet_name_list1[0]]);
}


loadExcelData();

// Define a route to get doctors by specialty and city
app.post('/getDoctors', (req, res) => {
  const { speciality, city } = req.body;
  const filteredDoctors = doctors.filter(doc => doc.Speciality === speciality && doc.City === city);
  const doctorData = filteredDoctors.map(doc => ({ name: doc.Name, mobile: doc.Mobile }));
  res.json(doctorData);
});

app.post('/getHospital', (req, res) => {
  const { location } = req.body;
  const filteredHospital = hospital.filter(hos => hos.location=== location);
  const hospitalData = filteredHospital.map(hos => ({ hospital_name : hos.hospital_name, location : hos.location, specialty : hos.specialty}));
  res.json(hospitalData);
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});






















// const express = require('express');
// const cors = require('cors');
// const xlsx = require('xlsx');

// const app = express();

// app.use(cors());
// app.use(express.json());

// let doctors;

// // Load the Excel data when the server starts
// const loadExcelData = () => {
//   const workbook = xlsx.readFile('doctors.csv'); // replace with your actual file path
//   const sheet_name_list = workbook.SheetNames;
//   doctors = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// }

// loadExcelData();

// // Define a route to get doctors by specialty and city
// app.post('/getDoctors', (req, res) => {
//   const { speciality, city } = req.body;
//   const filteredDoctors = doctors.filter(doc => doc.Speciality === speciality && doc.City === city);
//   const doctorNames = filteredDoctors.map(doc => doc.Name);
//   res.json(doctorNames);

  
// });

// // // Define a route to get doctors by specialty and city
// // app.post('/getDoctors', (req, res) => {
// //     const { speciality, city } = req.body;
// //     const filteredDoctors = doctors.filter(doc => doc.Speciality === speciality && doc.City === city);
// //     const doctorInfo = filteredDoctors.map(doc => ({ name: doc.Name, mobile: doc.Mobile }));
// //     res.json(doctorInfo);
// //   });



// // Start the server
// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });
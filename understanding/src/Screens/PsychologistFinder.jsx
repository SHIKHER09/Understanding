
import React, { useState, useEffect } from 'react';
import img1 from "../Assets/Psychology2.jpg";
import axios from 'axios';
import Footer from '../Component/Footer';
import '../styles/Psycology.css';
import GoogleSearchButton from './GoogleSearchButton';

const PsychologistFinder = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [sol, setSol] = useState('Loading..... ');

  useEffect(() => {
    // Fetch psychologists based on user's current location


    const result = async () => {
      try {
        const solution = await axios.get('http://127.0.0.1:5000/response');
        if (solution) {
          setSol(solution.data.response);
          //setSol({ solution });
        }


      } catch (error) {
        console.error('Error submitting assessment:', error);
      }
    }
    result();

    const fetchPsychologists = async () => {
      try {

        const response = await axios.get("http://localhost:8080/api/auth/psychologists");

        setPsychologists(response.data);
      } catch (error) {
        console.error('Error fetching psychologists:', error);
      }
    };

    fetchPsychologists();
  }, []);

  return (
    <div className='cont' style={{ display: 'block' }}>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Our Suggestion....</h1>
      <div className="box">
        <div className="resp">
          <p style={{ fontSize: '1.6vw' }}>{sol}</p>
        </div>

      </div>
      <div style={{ width: '100%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', gap: '2vw', color: 'black', marginBottom: '2vw' }}>
        <div style={{ width: '40%', height: '100%', padding: '10px' }}>
          <img
            src={img1}
            alt="Psychologist Finder"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }}
          />
        </div>
        <div style={{ width: '40%', height: 'auto', backgroundColor: 'white', boxShadow: '0 0 10px #e8a5c8', padding: '1vw', borderRadius: '15px' }}>
          <h2 style={{ font: '24px', display: "flex", justifyContent: 'center', alignItems: 'center', paddingBottom: "10px" }}>Psychologists Near You</h2>

          <div style={{ font: '24px', display: "flex", justifyContent: 'center', alignItems: 'center', paddingBottom: "10px" }}>
            <GoogleSearchButton />
          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
const styles = {
  psychologistItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 5px #ccc',
  },
};
export default PsychologistFinder;



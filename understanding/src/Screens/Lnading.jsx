import React, { useEffect } from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom';
import Im1 from '../Assets/Im1.png'
import '../styles/Landing.css'
import Footer from '../Component/Footer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TeamIcon from '@mui/icons-material/People';
import StethoscopeIcon from '@mui/icons-material/LocalHospital';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Anim from '../Component/Anim';


function Lnading() {

  return (
    <>
      <div>
        <div className='sec1' >

          <img src={Im1} alt=""
            style={{ width: '100%', height: '80%', objectFit: 'cover' }} />

          <div className='leftTitle'>
            <h1 style={{ marginBottom: '10px', fontSize: '2vw' }}>Understanzee</h1>
            <h2 style={{ width: '75%', marginBottom: '15px', fontSize: '1.2vw' }}>Change your feelings by just let us know <br /> what you are feeling now !!!</h2>
            <Link to="/Assessment" className='btn'>

              Start &nbsp; <ArrowForwardIcon style={{ color: 'white', fontSize: '1.6vw', fontFamily: 'cursive' }} />
            </Link>


          </div>
        </div>

      </div>

      <div className='p2'>
        <h2 >What we Do</h2>

        <div className='uptxt'>
          <div className='left'>
            <h2>Welcom To <br />
              Understanzee </h2>
            <div className="anim" style={{ width: '100%', height: '3vw', marginTop: '0.3vw' }}>
              <Anim></Anim>
            </div>
          </div>
          <div className='right'>
            <p>Elevate your mental well-being with our transformative Mental Health Companion application. Tailored assessments, personalized self-care, and expert support await. Whether you're seeking stress relief or urgent help, we're here. Progress tracking, professional connections, and empathetic communication empower you.  Join a community dedicated to your mental health. Your path to a brighter future begins now.</p>
          </div>
        </div>
        <div className='features'>
          <div className='boxes'>
            <SmartToyIcon style={{ color: '#d65485', fontSize: '3vw' }} />
            <br />
            <h5>
              chatBot
            </h5>

            <p>If you are feeling low, you can talk to our chat bot.
              It will not judge you, you can talk freely and say what you think.
            </p>
            <br />
            <div className="btnn">
              Read more
            </div>
          </div>
          <div className='boxes'>
            <StethoscopeIcon style={{ color: '#d65485', fontSize: '3vw' }} />
            <br />
            <h5>
              nearby doctors
            </h5>

            <p>
              Medical professionals who provide healthcare and treatment for various illnesses and conditions, accessible within close proximity to your location.
            </p>
            <br />
            <div className="btnn">
              Read more
            </div>
          </div>
          <div className='boxes'>

            <TeamIcon style={{ color: '#d65485', fontSize: '3vw' }} />
            <br />
            <h5>
              Our team
            </h5>

            <p>
              Dedicated team providing assistance, aiding in clear and concise communication to effectively convey information and meet your description needs.
            </p>
            <br />
            <div className="btnn">
              Read more
            </div>
          </div>
        </div>
      </div>

      <div className='p3'>
        <h3>We Understand you</h3>
        <div className='details'>
          <p>provide us some details <br /> so that we can Understand you better</p>
          <Link to="/Assessment" className='btn'>

            Start &nbsp; <ArrowForwardIcon style={{ color: 'white', fontSize: '1.6vw', fontFamily: 'cursive' }} />
          </Link>
        </div>
      </div>



      <div className="p4">
        <h3>Thank you</h3>
      </div>


      <Footer />
    </>

  )
}

export default Lnading
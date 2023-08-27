import React, { useEffect } from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom';
import Im1 from '../Assets/Im1.png'
import '../styles/Landing.css'
import Footer from '../Component/Footer';
import { FaUserMd } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserMd } from '@fortawesome/free-solid-svg-icons';
// import { faRobot } from '@fortawesome/free-solid-svg-icons';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TeamIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Lnading() {
 
  return (
      <>
      <div>
        <div className='sec1' >

          <img src={Im1} alt=""
            style={{ width: '100%', height: '90%', objectFit: 'cover' }} />

          <div className='leftTitle'>
            <h1 style={{ marginBottom: '10px' }}>Lorem, ipsum dolor.</h1>
            <p style={{ width: '70%', marginBottom: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quia.</p>
            <div className='btn'>
              start  <ArrowForwardIcon style={{ color: 'black' }} />
            </div>
          </div>

        </div>

        <div className='p2'>
          <h2 >What we Do</h2>

          <div className='uptxt'>
            <div className='left'>
              <h2>Welcom to <br />
                Moody</h2>
            </div>
            <div className='right'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quaerat sed sit maxime corrupti. Aut provident omnis vero architecto facere, aliquid eius voluptates ad, dignissimos molestias voluptate ea nesciunt earum. Doloribus praesentium repellendus unde amet debitis, itaque exercitationem illo magnam!</p>
            </div>
          </div>
          <div className='features'>
            <div className='boxes'>
              <SmartToyIcon style={{ color: '#d65485', fontSize: 50 }} />
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
              <FaUserMd size={50} color="#d65485" />
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

              <TeamIcon style={{ color: '#d65485', fontSize: 50 }} />
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
            <div className='btn'>
              start  <ArrowForwardIcon style={{ color: 'black' }} />
            </div>
          </div>
        </div>


        <div className="p4">
          <h3>Thank you</h3>
        </div>

        <Footer />
      </div>
      </>

  )
}

export default Lnading
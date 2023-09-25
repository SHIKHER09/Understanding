import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginFaliure, logout } from '../redux/userSlice';

function Nav() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  }

  const navStyles = {
    width: '8vw', padding: '.7vw 0px',
    borderRadius: '30px', backgroundColor: ' #d65485',
    textDecoration: 'none', color: 'white',
    cursor: 'pointer', fontSize: '1.5vw',
    display: 'flex', justifyContent: 'center'
  };

  return (
    <div style={{ height: '10vmin', width: '100%', backgroundColor: '#2f1e26', display: 'flex', alignItems: 'center', padding: 20, fontSize: '3vmin', fontWeight: '400', zIndex: 9, boxShadow: 'inset 0 -2px 0vw #d7b4c8' }}>
      <Link to="/" style={{ width: '40vw', textDecoration: 'none', color: '#01ffff' }}>
        UnderStanzee
      </Link>
      {currentUser.currentuser ?
        <div style={{
          width: '60vw', display: 'flex', justifyContent: 'flex-end', gap:
            '20px'
        }}>
          <div style={navStyles}
            onClick={handleLogout}>
            Logout
          </div>
        </div>
        :
        <div style={{
          width: '60vw', display: 'flex', justifyContent: 'flex-end', gap:
            '20px'
        }}>
          <Link to="/Register" style={navStyles}>
            SignUp
          </Link>
          <Link to="/Login" style={navStyles}>
            Login
          </Link>
        </div>
      }

    </div>
  )
}

export default Nav
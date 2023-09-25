import React from 'react'

function Footer() {
  const footerStyles = {
    display: 'flex',
    gap: '50px',
    width: '100%',
    height: '8vh',
    alignItems: 'center',
    paddingLeft: '20px',
    borderTop: '2px solid #8f848f',
    backgroundColor: 'DEE3E1',
    fontSize: '1.2vw',
    color: 'black',
    justifyContent: 'center',

  };
  return (
    <>


      <div style={footerStyles}>
        <div style={{ textAlign: 'center' }}>
          <h3>Understanzee</h3>
          <p>
            All Rights Reserved &nbsp; © 2023 &nbsp; Understanzee
          </p>
        </div>

      </div>
    </>
  )
}

export default Footer
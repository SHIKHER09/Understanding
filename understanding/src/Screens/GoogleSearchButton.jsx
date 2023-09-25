import React from 'react';
import '../styles/Landing.css'
class GoogleSearchButton extends React.Component {
  openGoogleSearch = () => {
    const searchText = 'psychologist near me';
    window.open(`https://www.google.com/search?q=${searchText}`, '_blank');
  };

  render() {
    return (
      <div>
        <button onClick={this.openGoogleSearch} className='btn'>Search for "psychologist near you"</button>
      </div>
    );
  }
}

export default GoogleSearchButton;

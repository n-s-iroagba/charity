import React from 'react';
import '../styles/Header.css'


const Header: React.FC = () => {
  return (
    <header >
      <video className='header-video' autoPlay loop muted>
        <source src="/Videos/headervideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Header;

// import React, { useCallback } from 'react';
// import { Link } from 'react-router-dom';
import { House, Person, Book,Award, Mortarboard} from 'react-bootstrap-icons';
import './Nav.css'
import { useState } from 'react';
// import About from '../about/About'

function Nav(props) {
    const [activeNav, setActiveNav] = useState('#')
    
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <House color="royalblue" size={26} />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <Mortarboard color="royalblue" size={26} />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <Person color="royalblue" size={26} />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <Book color="royalblue" size={26} />
      </a>
      <a href="#porfolio" onClick={() => setActiveNav('#porfolio')} className={activeNav === '#porfolio' ? 'active' : ''}>
        <Award color="royalblue" size={26} />
      </a>
    </nav>
  );
}

export default Nav; 
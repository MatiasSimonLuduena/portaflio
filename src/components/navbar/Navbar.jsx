/* eslint-disable react/prop-types */
import './navbar.css';
import { useState } from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const [drawer, setDrawer] = useState(null);

  const { hundleSroll, homeRef, projectsRef, aboutRef, contactRef, currentSection } = props;

  return (
    <>
      <nav className="navbar">
        <span className="logo">Matías Simón Ludueña</span>
        <div className="menu">
          <button onClick={() => hundleSroll(homeRef)}>
            Home
            <div className={`button-line ${currentSection === "home" && "opacity1"}`}></div>
          </button>
          <button onClick={() => hundleSroll(projectsRef)}>
            Projects
            <div className={`button-line ${currentSection === "projects" && "opacity1"}`}></div>
          </button>
          <button onClick={() => hundleSroll(aboutRef)}>
            About me
            <div className={`button-line ${currentSection === "about" && "opacity1"}`}></div>
          </button>
          <button onClick={() => hundleSroll(contactRef)}>
            Contact me
            <div className={`button-line ${currentSection === "contact" && "opacity1"}`}></div>
          </button>
        </div>
        <button
          className="button_menu-burger"
          onClick={() => setDrawer('left')}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div
        className={`container_menu-burger ${
          !drawer ? '' : drawer === 'left' ? 'menu-left' : 'menu-right'
        }`}
        onClick={() => setDrawer('right')}
      >
        <div className="menu-burger" onClick={(e) => e.stopPropagation()}>
          <FontAwesomeIcon icon={faX} onClick={() => setDrawer('right')} />
          <button>
            Home
            <div className='button-line'></div>
          </button>
          <button>
            Projects
            <div className='button-line'></div>
          </button>
          <button>
            About me
            <div className='button-line'></div>
          </button>
          <button>
            Contact me
            <div className='button-line'></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

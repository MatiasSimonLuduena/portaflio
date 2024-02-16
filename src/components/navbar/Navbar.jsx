import './navbar.css';
import { useState } from 'react';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [drawer, setDrawer] = useState(null);

  return (
    <>
      <nav className="navbar">
        <span className="logo">Matías Simón Ludueña</span>
        <div className="menu">
          <button>Home</button>
          <button>Projects</button>
          <button>Contact me</button>
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
          <button>Home</button>
          <button>Projects</button>
          <button>Contact me</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

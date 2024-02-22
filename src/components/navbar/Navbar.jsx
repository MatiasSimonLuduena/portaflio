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

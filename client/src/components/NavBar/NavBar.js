import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import Logo from '../../images/LogoAS.png';
import { Link } from 'react-router-dom';

import { Audio } from '../Audio/Audio';
import { SearchBar } from './SearchBar/SearchBar';

export const NavBar = ({ allPokemon, setCurrentPage }) => {
  // Estado para mostar elementos de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* NavBar */}
      <nav className= {`${styles.navbarCustom} navbar navbar-expand-md bg-body-tertiary`} >
        <div className="container-fluid">
          {/* Logo */}
          <Link to={'/home'}>
            <img className={styles.imgLogo} src={Logo} alt='Logo'/>
          </Link>

          {isSmallScreen && <SearchBar allPokemon={allPokemon} setCurrentPage={setCurrentPage} />}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            
            {/* Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/create">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">Contact</a>
              </li>
            </ul>

            <Audio />

            {!isSmallScreen &&  <SearchBar allPokemon={allPokemon} setCurrentPage={setCurrentPage} />}

          </div>
        </div>
      </nav>      
    </div>
  )
}

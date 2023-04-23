import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = ({ currentPokemon }) => {
  return (
    <div className={currentPokemon.length > 0 ? styles.main : styles.hideFooter}>
    
    <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
      <div className={styles.containerFooterIcons}>
        <a href="https://www.linkedin.com/in/antonio-silva-developer/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Asilvazavala?tab=repositories" target="_blank" rel="noopener noreferrer" >
          <i className="bi bi-github"></i>
        </a>
        <Link to='/contact' target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope"></i>
        </Link>
      </div>
      <div className={styles.footerDerechosAutor}>
        Creado por Antonio Silva (2023) &#169;
      </div>
    </footer>

    </div>
  )
}
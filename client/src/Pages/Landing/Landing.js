import React from 'react';
import styles from './Landing.module.css'

export const Landing = () => {
  return (
    <div className={styles.containerLanding}>
       <section className={styles.home}>
         <div className={styles.homeContent}>
          <h1>Welcome Pokefan</h1>
          <h3>Catch ´em all</h3>
          <div className={styles.btnBox}>
            <a href="/home">Let´s go</a>
          </div>
        </div>

        <div className={styles.homeSci}>
          <a target="_blank" rel="noopener noreferrer" href="/contact"><i className='bx bx-envelope'></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/antonio-silva-developer/"><i className='bx bxl-linkedin'></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Asilvazavala?tab=repositories"><i className='bx bxl-github'></i></a>
        </div>
      </section>
    </div>
  )
}

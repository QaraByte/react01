 import React from 'react';
import { NavLink } from 'react-router-dom';
 import styles from '../css/Navbar.module.css'

let Navbar=(props)=> {
  
    return (
      <div className="navbar">
        <div className={styles.item}>
          <a href="/">Home</a>
        </div>
        <div className={styles.item}>
          <NavLink to="about" className={navData => navData.isActive ? styles.active : styles.item }>About us</NavLink>
        </div>
        <div className={`${styles.item}`}>
          <NavLink to="posts" className={navData => navData.isActive ? styles.active : styles.item}>Posts</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="dialogs" className={navData => navData.isActive ? styles.active : styles.item}>Dialogs</NavLink>
        </div>
      </div>
    );
  }

  export default Navbar;
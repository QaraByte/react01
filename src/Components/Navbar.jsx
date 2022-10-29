 import React from 'react';
 import styles from '../css/Navbar.module.css'

let Navbar=(props)=> {
    return (
      <div className="navbar">
        <div className={styles.item}>
        <a href="#">Home</a>
        </div>
        <div className={styles.item}>
        <a href="#">About us</a>
        </div>
        <div className={styles.item}>
        <a href="#">Contacts</a>
        </div>
      </div>
    );
  }

  export default Navbar;
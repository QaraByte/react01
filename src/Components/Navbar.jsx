 import React from 'react';
 import styles from '../css/Navbar.module.css'

let Navbar=(props)=> {
    return (
      <div className="navbar">
        <div className={styles.item}>
        <a href="/">Home</a>
        </div>
        <div className={styles.item}>
        <a href="about">About us</a>
        </div>
        <div className={`${styles.item} ${styles.active}`}>
        <a href="posts">Posts</a>
        </div>
        <div className={styles.item}>
        <a href="dialogs">Dialogs</a>
        </div>
      </div>
    );
  }

  export default Navbar;
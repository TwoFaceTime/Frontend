import React from 'react';
import { Link } from 'react-router-dom';

import ButtonInHeader from '../ButtonInHeader/ButtonInHeader';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to='/' className={styles.Logo}>
        <div className={styles.Logo}>
          <div className={styles.letter}>N</div>
          <div className={styles.letter}>o</div>
          <div className={styles.letter}>_</div>
          <div className={styles.letter}>F</div>
          <div className={styles.letter}>a</div>
          <div className={styles.letter}>c</div>
          <div className={styles.letter}>e</div>
          <div className={styles.letter}>T</div>
          <div className={styles.letter}>i</div>
          <div className={styles.letter}>m</div>
          <div className={styles.letter}>e</div>
        </div>
      </Link>
      <Link to='/login'>
        <ButtonInHeader />
      </Link>
    </div>
  );
};

export default Header;

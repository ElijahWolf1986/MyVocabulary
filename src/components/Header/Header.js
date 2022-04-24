import React from 'react';
import styles from './Header.module.css';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header_top}>
        {/* logo + menu */}
        <p> menu </p>
      </div>
      <SearchForm />
    </section>
  );
};

export default Header;

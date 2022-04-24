import React from 'react';
import styles from './SearchForm.module.css';

function SearchForm(props) {
  const [errMessage, setErrMessage] = React.useState('');
  const [word, setWord] = React.useState('');

  function handleChangeKeyword(evt) {
    setWord(evt.target.value);
    setErrMessage('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!word) {
      return setErrMessage('Нужно ввести слово');
    }
    props.onUpdateKeyword(props.keyword);
  }

  return (
    <section className={styles.search}>
      <h2 className={styles.search_title}>Поиск слов</h2>
      <p className={styles.search_subtitle}>
        Введи слово, которое нужно перевести...
      </p>
      <form
        name='search-bar'
        className={styles.search_form}
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.search_form_info}>
          <input
            type='text'
            name='search'
            value={word || ''}
            onChange={handleChangeKeyword}
            required
            placeholder='Введите слово'
            className={styles.search_form_input}
          />
        </fieldset>
        <button type='submit' className={styles.search_button}>
          Искать
        </button>
      </form>
      <span className={styles.search_error_visible}>{errMessage}</span>
    </section>
  );
}

export default SearchForm;

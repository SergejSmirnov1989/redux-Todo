import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SearchPanel = ({ searchInBody, handleFilterChange }) => {
  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        id="input"
        type="checkbox"
        value="searchInBody"
        checked={searchInBody}
        onChange={handleFilterChange}
      />
      <label htmlFor="input" className={style.label}>
        Искать в тексте
      </label>
    </div>
  );
};

SearchPanel.propTypes = {
  searchInBody: PropTypes.bool,
  handleFilterChange: PropTypes.func,
};

export default SearchPanel;

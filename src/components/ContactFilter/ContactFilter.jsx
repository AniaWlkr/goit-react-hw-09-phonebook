import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, selectors } from '../../redux/contacts';
import styles from './ContactFilter.module.scss';

const ContactFilter = () => {
  const value = useSelector(selectors.getFilter);

  const dispatch = useDispatch();
  const handleChange = useCallback(
    event => {
      dispatch(changeFilter(event.target.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span role="img" aria-label="loupe icon" className={styles.icon}>
          🔎
        </span>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ContactFilter;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';
import { connect } from 'react-redux';
import { changeFilter, selectors } from '../../redux/contacts';

const ContactFilter = ({ value, handleChange }) => {
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

const mapStateToProps = state => {
  return {
    value: selectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(changeFilter(event.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../commonStyles/formComStyles.module.css';
import { operations } from '../../redux/contacts';
import Button from '../Button/Button';

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    addContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(newContact);
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <Button
          type="submit"
          title="Add contact &nbsp; ✅"
          className={styles.button}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addContact: newContact => dispatch(operations.addContact(newContact)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);

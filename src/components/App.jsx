import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Heading1, Heading2 } from './App.styled';

export default class App extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
  };

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  addContact = (contact) => {
    this.setState((prevState) => {
      const isNameAlreadyExists = prevState.contacts.some(
        (existingContact) => existingContact.name === contact.name
      );

      if (isNameAlreadyExists) {
        alert(
          'This name is already in the phonebook. Please choose a different name.'
        );
        return { contacts: [...prevState.contacts] };
      }

      const newContacts = [...prevState.contacts, contact];

      localStorage.setItem('contacts', JSON.stringify(newContacts));

      return { contacts: newContacts };
    });
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => {
      const newContacts = prevState.contacts.filter(
        (contact) => contact.id !== id
      );

      localStorage.setItem('contacts', JSON.stringify(newContacts));

      return { contacts: newContacts };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <AppContainer>
        <Heading1>Phonebook</Heading1>
        <ContactForm addContact={this.addContact} />
        <Heading2>Contacts</Heading2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.handleDeleteContact}
        />
      </AppContainer>
    );
  }
}

 

  
  

 
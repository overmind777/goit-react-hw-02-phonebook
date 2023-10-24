import { nanoid } from 'nanoid';
import { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleOnInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnFindInputChange = e => {
    e.preventDefault();
    const { contacts } = this.state;
    let name = e.target.value;
    const findedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(name.toLowerCase())
    );
    this.setState({ filter: findedContacts });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const contacts = this.state.contacts;
    const names = contacts.map(contact => {
      return contact.name;
    });
    let newArrayNames = [];
    for (const name of names) {
      newArrayNames.push(name.toLowerCase().split(' '));
    }

    if (
      newArrayNames.some(name => {
        return name.includes(this.state.name.toLowerCase().trim());
      })
    ) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      this.setState(prev => {
        return {
          contacts: [
            ...prev.contacts,
            { id: nanoid(), name: this.state.name, number: this.state.number },
          ],
          name: '',
        };
      });
    }
    e.target.reset();
  };

  handleClickDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => {
        return contact.id !== id;
      }),
      filter: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleOnSubmit={this.handleOnSubmit}
          handleOnInputChange={this.handleOnInputChange}
        />

        <h2>Contacts</h2>
        <Filter handleOnFindInputChange={this.handleOnFindInputChange} />
        <ContactList {...this.state} onDeleteContact={this.handleClickDelete} />
      </div>
    );
  }
}

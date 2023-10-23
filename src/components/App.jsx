import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleOnInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnFindInputChange = e => {
    const { contacts } = this.state;
    let name = e.target.value;
    const findedContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    this.setState({ filter: findedContacts });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
        name: '',
      };
    });
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="nameContact">
            Name
            <input
              type="text"
              name="name"
              id="nameContact"
              required
              placeholder="Enter name"
              onChange={this.handleOnInputChange}
            />
          </label>
          <label htmlFor="phoneContact">
            Phone
            <input
              type="tel"
              name="number"
              id="phoneContact"
              required
              placeholder="Enter phone"
              onChange={this.handleOnInputChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label htmlFor="find">
            Find contacts by name
            <input
              type="text"
              name="find"
              id="find"
              onChange={this.handleOnFindInputChange}
            />
          </label>
          <ul>
            {this.state.filter
              ? this.state.filter.map(contact => (
                  <li key={nanoid()}>
                    {contact.name}: {contact.number}
                  </li>
                ))
              : this.state.contacts.map(contact => (
                  <li key={nanoid()}>
                    {contact.name}: {contact.number}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    );
  }
}

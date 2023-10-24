import { nanoid } from 'nanoid';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <>
      <ul>
        {filter
          ? filter.map(contact => (
              <li key={nanoid()}>
                {contact.name}: {contact.number}
                <button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            ))
          : contacts.map(contact => (
              <li key={nanoid()}>
                {contact.name}: {contact.number}
                <button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </>
  );
};

export default ContactList;

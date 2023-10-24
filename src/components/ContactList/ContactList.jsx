import { nanoid } from 'nanoid';
import { StyledContactList, StyledButton } from './StyledContactList';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <StyledContactList>
      {filter
        ? filter.map(contact => (
            <li key={nanoid()}>
              {contact.name}: {contact.number}
              <StyledButton onClick={() => onDeleteContact(contact.id)}>
                Delete
              </StyledButton>
            </li>
          ))
        : contacts.map(contact => (
            <li key={nanoid()}>
              {contact.name}: {contact.number}
              <StyledButton onClick={() => onDeleteContact(contact.id)}>
                Delete
              </StyledButton>
            </li>
          ))}
    </StyledContactList>
  );
};

export default ContactList;

import { StyledContactForm, StyledButton } from './StyledContactForm';

const ContactForm = ({ handleOnSubmit, handleOnInputChange }) => {
  return (
    <>
      <StyledContactForm onSubmit={handleOnSubmit}>
        <label htmlFor="nameContact">Name</label>
        <input
          type="text"
          name="name"
          id="nameContact"
          required
          placeholder="Enter name"
          onChange={handleOnInputChange}
        />

        <label htmlFor="phoneContact">Phone</label>
        <input
          type="tel"
          name="number"
          id="phoneContact"
          required
          placeholder="Enter phone"
          onChange={handleOnInputChange}
        />

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledContactForm>
    </>
  );
};

export default ContactForm;

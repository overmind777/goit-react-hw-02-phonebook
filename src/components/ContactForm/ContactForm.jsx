const ContactForm = ({ handleOnSubmit, handleOnInputChange }) => {
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="nameContact">
          Name
          <input
            type="text"
            name="name"
            id="nameContact"
            required
            placeholder="Enter name"
            onChange={handleOnInputChange}
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
            onChange={handleOnInputChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;

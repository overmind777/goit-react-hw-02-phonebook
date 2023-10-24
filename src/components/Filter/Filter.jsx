const Filter = ({ handleOnFindInputChange }) => {
  return (
    <>
      <label htmlFor="find">
        Find contacts by name
        <input
          type="text"
          name="find"
          id="find"
          onChange={handleOnFindInputChange}
        />
      </label>
    </>
  );
};

export default Filter;

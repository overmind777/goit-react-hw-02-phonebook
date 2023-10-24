import { StyledFilter } from './StyledFilter';

const Filter = ({ handleOnFindInputChange }) => {
  return (
    <StyledFilter>
      <label htmlFor="find">Find contacts by name</label>
      <input
        type="text"
        name="find"
        id="find"
        onChange={handleOnFindInputChange}
      />
    </StyledFilter>
  );
};

export default Filter;

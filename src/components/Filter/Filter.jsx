import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filters/filter-selectors';
import { filterSlice } from 'redux/filters/filter-slice';
import { InputCss } from 'shared/components/Password/Password.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e =>
    dispatch(filterSlice.actions.settedFilter(e.target.value));

  return (
    <InputCss
      variant="filled"
      label="Filter"
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Type to find..."
    />
  );
};

export default Filter;

import { changeFilter } from 'redux/filterSlice';
import { InputList, Label } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(state => state.filter);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <Label htmlFor="filter">Find your contacts by name</Label>
      <InputList
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filterSelector}
        onChange={onChangeFilter}
        placeholder="Find your contact"
      />
    </>
  );
};

export { Filter };

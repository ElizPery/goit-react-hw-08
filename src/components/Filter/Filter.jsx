import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeData = ({ currentTarget }) => {
    const { value } = currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.contactFilterData}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeData}
        className={css.contactFilterItem}
        required
      />
    </label>
  );
};

export default Filter;

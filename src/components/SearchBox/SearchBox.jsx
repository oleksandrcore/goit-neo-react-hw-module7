import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }
  return (
    <div className={css.searchContainer}>
      <p className={css.title}>Find contacts by name</p>
      <input className={css.input} value={filter} onChange={onChange} type="text" />
    </div>
  );
};

export default SearchBox;

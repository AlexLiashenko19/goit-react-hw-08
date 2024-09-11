import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { setFilterValue } from "../../redux/filters/slice";

const SearchBar = () => {

  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(setFilterValue(value));
  };

  return (
    <div>
      <h2>Search profile: </h2>
      <input type="text" value={filterValue} onChange={handleFilter} placeholder="Enter your profile name"/>
    </div>
  )
}

export default SearchBar

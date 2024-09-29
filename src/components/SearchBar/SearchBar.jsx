import css from './SearchBar.module.css';
import {toast, Toaster} from "react-hot-toast";


const SearchBar = ({onSubmit}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.searchInput.value;
    if (!searchValue) {
        toast.error("Введіть текст для пошуку!");
        return;
    }
    onSubmit(searchValue);
  };
  return (
      <header>
          <div><Toaster/></div>
          <form className={css.searchform} onSubmit={handleSubmit}>
              <input
                  name="searchInput"
                  className={css.searchInput}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
              />
              <button className={css.searchBtn} type="submit">Search</button>
          </form>
      </header>
  );
};

export default SearchBar;

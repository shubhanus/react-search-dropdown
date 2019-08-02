import { useState, useMemo } from "react";
/**
 * This is React Custom hook
 * it takes all users object
 * handels searching, menu open close
 * @param {Array} data - User Array
 * @returns  { searchOptions, searchValue, handelSearch, isMenuOpen, closeMenu }
 */
function useSearch(data) {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  /**
   * This function will perform search on data or search keyword
   * @returns { searchOptions } - Memorized options will be returned
   */
  const searchOptions = useMemo(() => {
    let re = new RegExp(`^(${searchValue}).*$`, "i");
    const nextRes = [];
    for (let i = 0; i < data.length; i++) {
      const { id, name, address, items } = data[i];
      const inItems = items.find(
        item => item.toLowerCase() === searchValue.toLowerCase()
      );
      if (re.test(id) || re.test(name) || re.test(address) || inItems) {
        if (inItems) {
          nextRes.push({ ...data[i], inItems: inItems });
        } else {
          nextRes.push(data[i]);
        }
      }
    }
    return nextRes;
  }, [data, searchValue]);

  /**
   * This medthod updates search keywords in state
   * Function also handles menu open and close
   */
  const handelSearch = ({ target }) => {
    setSearchValue(target.value);
    if (isMenuOpen && !target.value) {
      setMenuOpen(false);
    } else if (!isMenuOpen && target.value) {
      setMenuOpen(true);
    }
  };

  /**
   * This method change menu open state to close
   */
  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  return { searchOptions, searchValue, handelSearch, isMenuOpen, closeMenu };
}

export default useSearch;

import React, { useEffect, useRef, useCallback } from "react";
import data from "./mockdata.json";
import "./App.scss";
import Results from "./components/Results/index.js";
import useSearch from "./hooks/search.js";
import useOptionSelection from "./hooks/optionSelect.js";
import Input from "./components/Input/index.js";

function App() {
  const listRef = useRef(null);
  const focusedOptionRef = useRef(null);
  const {
    searchOptions,
    searchValue,
    handelSearch,
    isMenuOpen,
    closeMenu
  } = useSearch(data);

  const {
    focused,
    handelKeyDown,
    handelHover,
    onMouseMove,
    resetFocused
  } = useOptionSelection({
    options: searchOptions,
    listRef,
    focusedOptionRef,
    closeMenu
  });

  useEffect(() => {
    // while searching reset selected option
    resetFocused();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  /**
   * This method detect outside click when menu is open and closes menu
   */
  const handelBackdrop = useCallback(
    e => {
      if (
        (listRef.current && listRef.current.contains(e.target)) ||
        e.target.className === "input__box"
      ) {
        return;
      }
      closeMenu();
    },
    [closeMenu, listRef]
  );

  /**
   * This Effect registers and de-register mouse click(down) event
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handelBackdrop, false);
    }
    return () => {
      document.removeEventListener("mousedown", handelBackdrop, false);
    };
  }, [handelBackdrop, isMenuOpen]);

  return (
    <div onKeyDown={isMenuOpen ? handelKeyDown : undefined} className="root">
      <Input handelSearch={handelSearch} value={searchValue} />
      {isMenuOpen && (
        <Results
          options={searchOptions}
          query={searchValue}
          focused={focused}
          handelHover={handelHover}
          onMouseMove={onMouseMove}
          listRef={listRef}
          focusedOptionRef={focusedOptionRef}
        />
      )}
    </div>
  );
}

export default App;

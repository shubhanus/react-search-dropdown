import { useState, useRef, useEffect } from "react";
import { scrollIntoView } from "../utils/scroll";

const useOptionSelection = ({
  options,
  listRef,
  focusedOptionRef,
  closeMenu
}) => {
  const allowMenuScroll = useRef(false);
  const blockHover = useRef(false);
  const [focused, setFocused] = useState({});
  const onMouseMove = () => {
    onMouseMove.current = false;
  };
  const handelHover = option => {
    if (blockHover.current || option.id === focused.id) {
      // when hover blocked (keyboard preference) or hovering on same option id
      return;
    }
    // changing focus option
    setFocused(option);
  };

  /**
   * @typedef {"up" | "down"} MetricFormat
   */
  /**
   * This method takes direction and change focused state
   * @param {MetricFormat} direction
   */
  const focusOption = direction => {
    let nextFocusIndex;
    const focusedIndex = focused.index === undefined ? -1 : focused.index;
    if (direction === "up") {
      nextFocusIndex = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
    } else if (direction === "down") {
      nextFocusIndex = (focusedIndex + 1) % options.length;
    }
    allowMenuScroll.current = true;
    setFocused({
      ...options[nextFocusIndex],
      index: nextFocusIndex
    });
  };

  useEffect(() => {
    // change state of menual focus is allowed or not
    // used for mouse kay keyboard pref
    if (allowMenuScroll.current) {
      scrollIntoView(listRef, focusedOptionRef);
    }
    allowMenuScroll.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  const resetFocused = () => {
    // resets focus
    if (focused.id) {
      setFocused({});
    }
  };
  /**
   * This method handels Arrow up | Arrow down | Escape key down
   * @param {Event} e
   */
  const handelKeyDown = e => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        focusOption("up");
        break;
      case "ArrowDown":
        e.preventDefault();
        focusOption("down");
        break;
      case "Escape":
        closeMenu();
        break;
      default:
        break;
    }
  };

  return {
    focused,
    handelKeyDown,
    handelHover,
    onMouseMove,
    resetFocused
  };
};

export default useOptionSelection;

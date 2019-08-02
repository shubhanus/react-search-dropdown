import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
/**
 * This is React Stateless component
 * Renders Menu and loop through Menu items
 * @param {Object} {
 *   options,
 *   query,
 *   focused,
 *   handelHover,
 *   focusedOptionRef,
 *   listRef
 * }
 * @returns ReactComponent
 */
function Results({
  options = [],
  query,
  focused,
  handelHover,
  focusedOptionRef,
  listRef
}) {
  return (
    <ul className="user__list" ref={listRef}>
      {options.length ? (
        options.map((option, index) => (
          <UserCard
            {...option}
            isHover={focused.id === option.id}
            key={option.id}
            query={query}
            onMouseOver={handelHover}
            index={index}
            ref={focusedOptionRef}
          />
        ))
      ) : (
        <div className="user__card-empty">No Users Found</div>
      )}
    </ul>
  );
}

Results.propTypes = {
  options: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  focused: PropTypes.object.isRequired,
  handelHover: PropTypes.func.isRequired,
  focusedOptionRef: PropTypes.object,
  listRef: PropTypes.object
};

export default React.memo(Results);

import React from "react";
import PropTypes from "prop-types";
import MagnifyIcon from "mdi-react/MagnifyIcon";

/**
 * This is React functional Stateless Component
 * It will render input component
 * Only updates when value of input(value prop) changed
 * Updates are blocked for all other events
 * @param {Object} { handelSearch, value }
 * @returns {ReactComponent}
 */
function Input({ handelSearch, value }) {
  return (
    <div className="input__wrapper">
      <MagnifyIcon size={20} />
      <input
        className="input__box"
        type="text"
        placeholder="Search users by ID, address, name"
        onChange={handelSearch}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  handelSearch: PropTypes.func.isRequired,
  value: PropTypes.string
};

const areEqual = (props, nextProps) => {
  if (props.value !== nextProps.value) {
    return false;
  }
  return true;
};

export default React.memo(Input, areEqual);

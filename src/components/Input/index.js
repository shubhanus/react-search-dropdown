import React from "react";
import PropTypes from "prop-types";
import MagnifyIcon from "mdi-react/MagnifyIcon";
import CloseIcon from "mdi-react/CloseIcon";
/**
 * This is React functional Stateless Component
 * It will render input component
 * Only updates when value of input(value prop) changed
 * Updates are blocked for all other events
 * @param {Object} { handelSearch, value }
 * @returns {ReactComponent}
 */
function Input({ handelSearch, value }) {
  /**
   * Clear input's value 
   */
  const clearInput = () => {
    handelSearch({ target: { value: "" } });
  };
  return (
    <div className="input__wrapper">
      <MagnifyIcon size={20} className="magnify-ico" />
      <input
        className="input__box"
        type="text"
        placeholder="Search users by ID, address, name"
        onChange={handelSearch}
        value={value}
      />
      {value && (
        <CloseIcon size={20} className="close-ico" onClick={clearInput} />
      )}
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

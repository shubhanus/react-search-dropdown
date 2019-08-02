import React from "react";
import PropTypes from "prop-types";
import HighlightedText from "./HighlightedText";
/**
 * This React Stateless component
 * Renders User card with id, name, address, and if something found in items
 * This Component takes forwareded ref and set to list item when it is focused
 * Only updates when {id, name, address, isHover, query, inItems } changes
 * All Other Updates are blocked
 * @param {Object} {id, name, address, isHover, query, inItems, onMouseOver}
 * @returns ReactComponent
 */
const UserCard = React.forwardRef((props, ref) => {
  const { id, name, address, isHover, query, inItems, onMouseOver } = props;
  const handelMouseOver = () => {
    onMouseOver(props);
  };
  return (
    <li
      ref={isHover ? ref : undefined}
      className={`user__card ${isHover ? "focused" : ""}`}
      onMouseOver={handelMouseOver}
      // onMouseMove={}
    >
      <div className="user__card-id">
        <HighlightedText query={query}>{id}</HighlightedText>
      </div>
      {inItems && (
        <div className="user__card-in-items">"{inItems}" Found in items</div>
      )}
      <div className="user__card-name">
        <i>
          <HighlightedText query={query}>{name}</HighlightedText>
        </i>
      </div>
      <div className="user__card-address">
        <HighlightedText query={query}>{address}</HighlightedText>
      </div>
    </li>
  );
});

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  isHover: PropTypes.bool.isRequired,
  query: PropTypes.string,
  inItems: PropTypes.string,
  onMouseOver: PropTypes.func
};

const areEqual = (props, nextProps) => {
  if (
    props.id === nextProps.id &&
    props.name === nextProps.name &&
    props.address === nextProps.address &&
    props.isHover === nextProps.isHover &&
    props.query === nextProps.query &&
    props.inItems === nextProps.inItems
  ) {
    return true;
  }
  return false;
};

export default React.memo(UserCard, areEqual);

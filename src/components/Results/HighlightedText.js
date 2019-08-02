import React from "react";
import PropTypes from "prop-types";

/**
 * This is react Stateless component
 * it highlightes searched keyword in rendered part if found else same string
 * All other updates apart form {children, query} change are blocked
 * @param {*} { children, query }
 * @returns ReactComponent
 */
function HighlightedText({ children, query }) {
  if (query) {
    let re = new RegExp(`^(${query}).*$`, "i");
    let searchKeywordIdx = re.test(children);
    if (searchKeywordIdx) {
      return (
        <>
          <b className="highlight">{children.substring(0, query.length)}</b>
          {children.substring(query.length)}
        </>
      );
    }
  }
  return children;
}

HighlightedText.propTypes = {
  children: PropTypes.string.isRequired,
  query: PropTypes.string
};

const areEqual = (props, nextProps) => {
  if (
    props.children === nextProps.children &&
    props.query === nextProps.query
  ) {
    return true;
  }
  return false;
};

export default React.memo(HighlightedText, areEqual);

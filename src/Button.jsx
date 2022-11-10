import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

export function Button(props) {
  const inputRef = useRef(null);
  return (
    <>
      <button className="item button-ac for-hover" id="clear">
        Clear
      </button>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className="u-full-width"
        placeholder={props.placeHolder}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;

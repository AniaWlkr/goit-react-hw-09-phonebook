import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, type = 'button', cbOnClick, cbArgs, className }) => {
  return cbOnClick ? (
    <button
      type={type}
      className={className}
      onClick={cbArgs ? () => cbOnClick(...cbArgs) : cbOnClick}
    >
      {title}
    </button>
  ) : (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  cbOnClick: PropTypes.func,
  cbArgs: PropTypes.array,
  className: PropTypes.string,
};

export default Button;

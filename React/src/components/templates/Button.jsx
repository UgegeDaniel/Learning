import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, name, onPropClick1}) => {

  return (
    <button 
    type = " button"
    onClick= {(e) => onPropClick1(e)}
    className={className}>
        {name}
    </button>
  )
}

Button.defaultProps = {
    className : "Default attribute value",
    name : "Default attribute value",
}

Button.propTpyes = {
    className : PropTypes.string,
    name : PropTypes.string,
    onPropClick1 : PropTypes.func.isRequired,
}

export default Button
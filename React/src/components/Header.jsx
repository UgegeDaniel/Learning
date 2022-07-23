import React from 'react';
import PropTypes from 'prop-types';

import Button from './templates/Button'

const Header = ({title, onPropClick}) =>{

  return (

    <header className="header">
    <h1>{title}</h1>

     <Button 
     onPropClick1 ={onPropClick}
     className="btn" 
     name ="Add Task" />
     

    </header>



  )
}

Header.defaultProps = {
    title : "Default attribute value",
}

Header.propTpyes = {
    title : PropTypes.string,
    onPropClick : PropTypes.func.isRequired
}

/*
const headingStyles = {
    marginLeft:"50%", 
    color:"red"
}

style = {headingStyles}
*/

export default Header
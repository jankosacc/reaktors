import React from 'react';
import { IconContext } from "react-icons";

/*
{ color: {color}, size: {size}, className: {className}, style: {style}, attr: {attr}, title: {title} }
*/

const Icon = ({children, color, size, className, style, attr, title}) => {
  return (
    <IconContext.Provider value={{className: ''}}>
      {children}
    </IconContext.Provider>
  )
}

export default Icon;

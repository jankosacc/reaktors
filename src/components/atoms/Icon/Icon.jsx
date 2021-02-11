import React from 'react';
import { IconContext } from "react-icons";

const Icon = ({children, color, size, className, style, attr, title}) => {
  <IconContext.Provider value={{ color: {color}, size: {size}, className: {className}, style: {style}, attr: {attr}, title: {title} }}>
    {children}
  </IconContext.Provider>
}

export default Icon;

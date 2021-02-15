import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <ul className="flex text-center">
        <li className="flex-1"><Link to="/">Home</Link></li>
        <li className="flex-1"><Link to="/products">Products</Link></li>
        <li className="flex-1"><Link to="/about">About</Link></li>
        <li className="flex-1"><Link to="/contacts">Contacts</Link></li>
      </ul>
    );
  }

export default Menu;

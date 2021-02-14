import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <ul>
        <li><Link to="/products">Products</Link></li>
      </ul>
    );
  }

export default Menu;

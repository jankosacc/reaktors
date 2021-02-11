import React from 'react';

import Logo from '../../molecules/Logo/Logo';
import SearchForm from '../../molecules/SearchForm/SearchForm';
import Menu from '../../molecules/Menu/Menu';

const Header = () => {
  return (
    <div className="shadow p-2">
      <ul className="flex">
        <li><Logo /></li>
        <li><SearchForm /></li>
        <li><Menu /></li>
      </ul>
    </div>
  );
}

export default Header;

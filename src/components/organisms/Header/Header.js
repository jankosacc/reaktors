import React from 'react';

import Logo from '../../molecules/Logo/Logo';
import SearchForm from '../../molecules/SearchForm/SearchForm';
import Menu from '../../molecules/Menu/Menu';

const Header = () => {
  return (
    <div className="shadow p-2">
      <Menu />
    </div>
  );
}

export default Header;

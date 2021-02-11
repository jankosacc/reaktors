import React from 'react';

import { Link } from 'react-router-dom';

import Image from '../../atoms/Image/Image';

const Logo = () => {
  return (
    <React.Fragment>
      <Link to="/"><Image /></Link>
    </React.Fragment>
  );
}

export default Logo;

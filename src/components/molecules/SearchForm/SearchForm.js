import React from 'react';

import { FaSearch } from 'react-icons/fa';

import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';

const Loading = () => {
  return (
    <React.Fragment>
      <Label text="Search" />
      <Input type='search' />
      <Button><Icon><FaSearch /></Icon></Button>
    </React.Fragment>
  );
}

export default Loading;

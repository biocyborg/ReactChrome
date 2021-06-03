import React, { Fragment } from 'react';
import { Button } from 'antd';

import '../styles/antd-diy.less'
import styles from './index.scss'

function Popup() {
  return (
    <Fragment>
      <Button type="primary">Primary Button</Button> 
      <Button>Default Button</Button>
    </Fragment>
  );
}

export default Popup;

import React from 'react';
import { container, wrapper } from './Container.module.css';

const Container = ({ children }) => (
  <div className={container}>
    <div className={wrapper}>{children}</div>
  </div>
);

export default Container;

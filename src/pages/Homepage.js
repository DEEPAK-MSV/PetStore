import React from 'react';
import { Outlet } from 'react-router-dom';
import Base from './Base';
import Content from './Content';
import Header from './Header';
import Images from './Images';

function Homepage() {
  return (
    <>
      <Header />
      <Images />
      <Content />
      <Base />
      <Outlet/>
    </>
  )
}

export default Homepage;

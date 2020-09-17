import React from 'react';
import {Navbar} from 'react-bootstrap';

const AppNav = () => {
  return (
    <div className="appNav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          CONVERTER
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default AppNav;

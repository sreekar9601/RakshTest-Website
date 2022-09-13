
import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function Nav() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Raksh Foundation</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            
            <MDBNavbarLink active href='#'>Raksh</MDBNavbarLink>
            <MDBNavbarLink active href='#'>About Us</MDBNavbarLink>
            <MDBNavbarLink active href='#'>Our Work</MDBNavbarLink>
            <MDBNavbarLink active href='#'>Contribute</MDBNavbarLink>
            <Link active href='#' to='/Donate'>Donate</Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}


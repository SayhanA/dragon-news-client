import React, { Component, useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {

    return (
        <Container>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='text-secondary pt-2'><span>Journalism Without Fear or Favour</span></p>
                <p className='0'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex border px-5 py-4'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger fs-5 fw-bolder' speed={100}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text.....
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;
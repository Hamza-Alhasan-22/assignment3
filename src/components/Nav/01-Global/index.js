import React from 'react';
import "./style.css";
import { Navbar, Container, Nav, Button, Form, NavDropdown, Col, Row } from "react-bootstrap"
import { BsFillBagFill,BsSearch} from 'react-icons/bs';
import {MdFavoriteBorder} from 'react-icons/md';

function Global() {
    const navBar = {
        'titles': [
            {
                'title': 'SHOP',
                'options': ['option1', 'option2']
            },
            {
                'title': 'FABRIC',
                'options': ['option1', 'option2']
            },
            {
                'title': 'JOURNAL',
                'options': ['option1', 'option2']
            },
            {
                'title': 'ABOUT',
                'options': ['option1', 'option2']
            }
        ]
    };
    var i = 1;
    const navBarTitles = navBar.titles.map((item) => {
        return (
            <NavDropdown title={item.title} id="navbarScrollingDropdown" className='title'>
                {
                    item.options.map((option) => {
                        return (
                            <NavDropdown.Item href={"#" + item.title.toLowerCase() + "-action" + i++}>{option}</NavDropdown.Item>
                        )
                    }
                    )
                }
            </NavDropdown>
        )
    });

    return (
        <div className='nav-bar-div'>
            <Navbar bg="light" expand="lg">
                <Container fluid className=''>
                    <Navbar.Brand href="#" className="matter-logo">matter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {navBarTitles}
                            <Nav.Link href="#login" className='title'>Login</Nav.Link>
                            <Nav.Link href="#searchIcon"><BsSearch /></Nav.Link>
                            <Nav.Link href="#favIcon"><MdFavoriteBorder /></Nav.Link>
                            <Nav.Link href="#shopIcon"><BsFillBagFill /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Global;
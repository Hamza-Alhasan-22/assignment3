import React from 'react';
import "./style.css";
// import { Navbar, Container, Nav, Button, Form, NavDropdown, Col, Row } from "react-bootstrap"
import { BsFillBagFill, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { GoArrowSmallDown } from 'react-icons/go';

function Global() {
    const navBar = [
        {
            title: 'SHOP',
            options: ['option1', 'option2']
        },
        {
            title: 'FABRIC',
            options: ['option1', 'option2']
        },
        {
            title: 'JOURNAL',
            options: ['option1', 'option2']
        },
        {
            title: 'ABOUT',
            options: ['option1', 'option2']
        }
    ];
    const headerTitle = (title, options) => {
        return (
            <>
                <button className='title-button-txt'>{title}&#8595;</button>
                {/* <GoArrowSmallDown className='arrow-down' size={50} /> */}
            </>

        )
    };

    return (
        <div className='nav-bar-div'>
            <div className='title-container'>
                <h2 id='matter'>matter</h2>
                {
                    navBar.map(item => {
                        return (headerTitle(item.title, item.options))
                    })
                }
            </div>
            <div className='icon-container'>
                <p className='title-button-txt login'>Login</p>
                <BsSearch size={20}/>
                <MdFavoriteBorder size={20} />
                <BsFillBagFill size={20} />
            </div>
        </div>
    );
}

export default Global;
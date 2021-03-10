import React from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Sidebar.css';
// import SubMenu from './Submenu';
import Scrollbars from 'react-custom-scrollbars';
import * as FaIcons from 'react-icons/fa';

//ADD NAVBAR TO TOP
const Nav = styled.div`
    background: linear-gradient(90deg, rgb(19, 18, 22) 20%, rgb(23, 13, 204) 100%);
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

//NAVBURGER
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

//SIDEBAR
const SidebarNav = styled.nav`
    background: #09090B;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 5;
    left: ;
    transition: 350ms;
    z-index: 10;
`;

//SIDEBAR WRAP
const SidebarWrap = styled.div`
    width: 100%;
`;

//SIDEBAR CONSTRUCTOR
export const Sidebar = () => {
    return (
        <>

            <IconContext.Provider value={{ color: '#fff' }}>

                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars />
                    </NavIcon>
                </Nav>

                    <SidebarNav>
                        
                        <SidebarWrap className="SidebarWrap">
                            <Scrollbars style={{ width: 300, height: 1000 }}>
                                Hello
                                Map 
                                Sidebar Data here 🍩 
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </Scrollbars>
                        </SidebarWrap>
                    </SidebarNav>
            </IconContext.Provider> 
        </>
    );
};



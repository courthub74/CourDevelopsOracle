import React from 'react';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Sidebar.css';
// import SubMenu from './Submenu';
import Scrollbars from 'react-custom-scrollbars';


//SIDEBAR
const SidebarNav = styled.nav`
    background: #15172c;
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
        </>
    );
};



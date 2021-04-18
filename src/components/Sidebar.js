import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Sidebar.css';
import './Navbar.css'
import SubMenu from './Submenu';
import { Scrollbars } from 'react-custom-scrollbars';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { ToDos } from './ToDos';

// import { Button } from '../Button'


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
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 5;
    overflow-y: auto;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 4000ms;
    z-index: 10;
`;

//SIDEBAR WRAP
const SidebarWrap = styled.div`
    width: 100%;
`;

//SIDEBAR CONSTRUCTOR WITH NAVBAR INCLUDED
export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <IconContext.Provider value={{ color: '#fff' }}>

                <Nav className="NavbarItems">

                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />  {/*Sets Up a On/Off Switch */} 
                    </NavIcon>

                    <h1 className="navbar-logo">CourDevelops
                        {/* <a href="/pages/home" className="navbar-logo"> */}
                    </h1>

                    <div className="menu-icon">
                        
                    </div>

                    <ul className="nav-menu">
                        {ToDos.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* <Button>Account</Button> */}

                </Nav>

                {/* SideBar Part */}

                    <SidebarNav id="stick" sidebar={sidebar}>
                        
                        <SidebarWrap className="SidebarWrap">
                            
                                    <Scrollbars className="scroll">
                                        {/* Hello Map Sidebar Data here 🍩  */}
                                        
                                        {SidebarData.map((item, index) => {
                                            return <SubMenu item={item} key={index} />;

                                            //BELOW is the manual way. ABOVE is the automap way
                                            // return (
                                            //     <li key={index} className={item.cName}>
                                            //         <Link to={item.path}>
                                            //             {item.icon}
                                            //             <span>{item.title}</span>
                                            //         </Link>
                                            //     </li>
                                            // )

                                        })}
                                    </Scrollbars>
                            
                        </SidebarWrap>
                    </SidebarNav>
            </IconContext.Provider> 
        </>
    );
};



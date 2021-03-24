import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  padding: 20px;
  list-style: none;
  text-decoration: none;
  font-size: 18px;

  &:hover {
      background: #252831;
      border-left: 2px solid #00008B;
      cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #black;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #00008B;
        cursor: pointer;
    }
`;

const SubMenu = ({item}) => {

    const [subNav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subNav);

    // const [subNav2, setSubnav2] = useState(false);
    // const showSubnav2 = () => setSubnav2(!subNav2);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>

                <div>
                {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>

                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                
            </SidebarLink>

            {/* The listed items  */}
            {subNav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                        

                            {/* {subNav2 && item.subNav2.map((item, index) => {
                                return (
                                    <>
                                    <div>
                                        Dropdown within Dropdown
                                        <SidebarLabel to={item.path2} onClick={item.subNav2 && showSubnav2}>{item.title2}</SidebarLabel>
                                    </div>
                                    </>
                                )
                            })}

                                            {item.subNav2 && subNav2
                                                ? item.iconOpened
                                                : item.subNav
                                                ? item.iconClosed
                                                : null} */}

                    </DropdownLink>
                );
            })}

                
        </>
    );
};

export default SubMenu;
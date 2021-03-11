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

    return (
        <>
            <SidebarLink to={item.path}>
                <SidebarLabel>Linky Link</SidebarLabel>
            </SidebarLink>

            {subNav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink>
                        <SidebarLabel>Dropy Drop</SidebarLabel>
                    </DropdownLink>
                );
            })}

                
        </>
    )
}

export default SubMenu;
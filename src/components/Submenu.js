import React from 'react';
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
    return (
        <>
            <SidebarLink>
                <SidebarLabel>Linky Link</SidebarLabel>
            </SidebarLink>

                <DropdownLink>
                    <SidebarLabel>Dropy Drop</SidebarLabel>
                </DropdownLink>
        </>
    )
}

export default SubMenu;
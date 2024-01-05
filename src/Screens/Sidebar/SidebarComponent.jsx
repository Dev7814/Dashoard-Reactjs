import React, { useState } from 'react';
import './Sidebar.css';
import { TiHomeOutline } from "react-icons/ti";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

const SidebarComponent = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            <Sidebar collapsed={isCollapsed}>
                <Menu >
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <GiHamburgerMenu /> : undefined}>
                        {!isCollapsed && (
                            <div className='space-item'>
                                <h2>Admin</h2>
                                <h2 onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <GiHamburgerMenu />
                                </h2>
                            </div>
                        )}
                    </MenuItem>
                    <MenuItem
                        icon={<TiHomeOutline />}
                    > Dashboard </MenuItem>
                    <SubMenu
                        icon={<FaChartBar />}
                        label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<IoCalendarOutline />}> Calendar </MenuItem>
                </Menu>
                {!isCollapsed &&
                    <>
                        <div className='w3-row w3-padding'>
                            <div className='w3-card w3-round-large w3-padding center-item' style={{ flexDirection: 'column' }}>
                                <img src='./Image.jpg' loading='lazy' alt='react' className='w3-col w3-round' />
                                <button className='w3-btn w3-card w3-round w3-deep-orange'>Get Subscription</button>
                            </div>
                        </div>
                        <div className='w3-section w3-left-align w3-padding'>
                            <p className='w3-margin-top'>Skillify Techer Dashboard Admin</p>
                            <p style={{margin:0}}>&#169; 2020 All Rights Reserved</p>
                        </div>
                    </>
                }

            </Sidebar>
        </>
    );
};

export default SidebarComponent;

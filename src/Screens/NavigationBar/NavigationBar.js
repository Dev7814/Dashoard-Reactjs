import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { CiWavePulse1 } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";

const NavigationBar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <div >
            <nav className="navbar">
                <div className="container-nav">
                    <div style={{ display: 'flex' }}>
                        <h2 className='w3-col'>Hello Mad!</h2>
                        <div style={{ margin: '10px 0' }}>
                            <input className='w3-input w3-round w3-border' placeholder='Search here' />
                        </div>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <h2 >
                            <GiHamburgerMenu />
                        </h2>
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            {/* <li className='w3-hide-large '>
                                <div className='center-item w3-btn w3-card w3-round w3-large' onClick={handleShowNavbar} style={{ padding: 8 }}>
                                    <IoCloseSharp />
                                </div>
                            </li> */}
                            <li>
                                <div className='center-item w3-btn w3-deep-orange w3-card w3-round w3-large' style={{ padding: 8 }}>
                                    <MdOutlineFileUpload /> New Upload
                                </div>
                            </li>
                            <li>
                                <div className='center-item w3-btn w3-card w3-round w3-large' style={{ padding: 8 }}>
                                    <LuBell />
                                </div>
                            </li>
                            <li>
                                <div className='center-item w3-btn w3-card w3-round w3-large' style={{ padding: 8 }}>
                                    <IoChatbubbleEllipsesOutline />
                                </div>
                            </li>
                            <li>
                                <div className='center-item w3-btn w3-card w3-round w3-large' style={{ padding: 8 }}>
                                    <CiWavePulse1 />
                                </div>
                            </li>
                            <li>
                                <div className='center-item w3-btn w3-card w3-round w3-large' style={{ padding: 8 }}>
                                    <FaCircleUser />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar

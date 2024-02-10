import React, { useState } from "react";

import {FaBars, FaReact} from "react-icons/fa";
import { Link } from "react-router-dom";
import {HiX} from "react-icons/hi";

const data=[
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const NavBar=()=>{
    const [toggleIcon, setToggleIcon]=useState(false);
    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbarContainer">
                    <Link to={'/'} className="navbarContainerLogo">
                        <FaReact size={30}/>
                    </Link>
                </div>
                <ul className="navbarContainerMenu">
                    {
                        data.map((item, key)=>(
                            <li key={key} className="navbarContainerMenuItem">
                                <Link className="navbarContainerMenuItemLinks" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="navIcon" onClick={handleToggleIcon}>
                    {
                        toggleIcon?<HiX size={30}/>:<FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
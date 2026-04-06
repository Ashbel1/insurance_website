import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaProjectDiagram, FaBlog, FaPhoneAlt, FaShoppingCart, FaUserFriends, FaCogs } from 'react-icons/fa';
import './style.css';

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: <FaHome style={{ marginRight: 8 }} />
  },
  {
    id: 2,
    title: 'Services',
    link: '/services',
    icon: <FaServicestack style={{ marginRight: 8 }} />
  },
  {
    id: 3,
    title: 'Plans and Packages',
    link: '/projects',
    icon: <FaProjectDiagram style={{ marginRight: 8 }} />
  },
  {
    id: 4,
    title: 'About',
    link: '/about',
    icon: <FaInfoCircle style={{ marginRight: 8 }} />
  },
  {
    id: 5,
    title: 'Terms and Conditions',
    link: '/terms',
    icon: <FaCogs style={{ marginRight: 8 }} />
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
    icon: <FaPhoneAlt style={{ marginRight: 8 }} />
  }
];

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => (
                        <ListItem key={mn}>
                            <Link onClick={ClickHandler} className="active" to={item.link}>
                                {item.icon}{item.title}
                            </Link>
                        </ListItem>
                    ))}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'People',
        path: '/people',
        icon: <BsIcons.BsPeopleFill />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    /*{
        title: 'Login',
        path: '/login',
        icon: <BsIcons.BsDoorOpenFill />,
        cName: 'nav-text'
    },*/
    {
        title: 'Log Out',
        path: '/log_out',
        icon: <BsIcons.BsDoorClosedFill />,
        cName: 'nav-text'
    },
]
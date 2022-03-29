import React, {useState} from 'react';
import Logo from '../ReadySetTeach.jpg';
import User from '../Profile.jpg';
import { Link } from 'react-router-dom';
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
return (
	<>
	<Nav bg="dark" variant="dark" >
	

		<IconContext.Provider value={{ color: '#000' }}>
		<div className="navbar">
			<NavLink to='#' className='menu-bars'> 
				<BsIcons.BsPersonCircle onClick={showSidebar} font-size="35px"/>
			</NavLink>
		</div>
		<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
			<ul className='nav-menu-items' onClick={showSidebar}>
				<li className='navbar-toggle'>
					<NavLink to='#' className='menu-bars'>
						<BsIcons.BsX font-size="35px"/>
					</NavLink>
				</li>
				{SidebarData.map((item, index) => {
					return(
						<li key={index} className={item.cName}>
							<NavLink to={item.path}>
								{item.icon}
								<span>{item.title}</span>
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
		</IconContext.Provider>

		<NavMenu> 
        
		<NavLink to='/Calendar' activeStyle>
			Calendar
        </NavLink>
		<NavLink to='/Lessons' activeStyle>
			Lesson Plans
        </NavLink>
		<NavLink to='/curriculum' activeStyle>
			Curriculum
        </NavLink>
		<NavLink to='/login' activeStyle>
			Log in
		</NavLink>
		<img src={Logo} className='Logo' alt="logo"/>
		</NavMenu>

	</Nav>
	</>
);
};

export default Navbar;
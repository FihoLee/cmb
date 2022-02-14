import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

//top light purple box
export const Nav = styled.nav`
background: #9E768F;
height: 85px;
display: flex;
justify-content: flex;
padding: 0.0rem; calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

//welcome and home
export const NavLink = styled(Link)`
color: #000000;
font-weight: bold;
font-size: 1.5rem;
display: flex;
text-align: center;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&.active {
	color: #C4C4C4;
}
`;

//hamburger menu
export const Bars = styled(FaBars)`
display: block;
color: #fffcfc;
font-size: 1.8rem;
padding-top: 24px;
@media screen and (max-width: 768px) {
	
	position: auto;
	top: 0;
	right:60;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: fixed;
align-self: auto;
margin-left: 23rem; //puts words in middle of screen, moves logo too
 width: 50vw;
white-space: 24px; 
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
text-align: center;
align-items: center;
margin-right: 40px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #9E768F;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: light-blue;
}
`;

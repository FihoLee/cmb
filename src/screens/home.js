import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

/*const Home = () => {
  return (
   
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
      <div
        style={{
          display: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <h1>Welcome to Ready Set Teach</h1>
      </div>

        
      <div class="d-flex align-items-center">
        <NavLink to='/lessons' activeStyle>
        <h2>Lessons Plans</h2>
        </NavLink>
       </div>
    

      </div>
   
  );
};
  
export const NavLink = styled(Link)`
color: #00000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fffcfc;
}
`;*/

function Home () {
  return (
    <div className='home'>
      <h1>Welcome to Ready Set Teach!</h1>
    </div>
  );
}

export default Home;

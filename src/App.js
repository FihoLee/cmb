import React, { useState, useContext, useEffect} from 'react';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Lessons from './screens/lessons';
import Curriculum from './screens/curriculum';
import Login from './screens/login'
import Settings from './screens/settings';
import People from './screens/people';
import Logout from './screens/log_out';
import PrivateRoute from './screens/privateroute'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./context/auth_context"

function App() {
return (
	<Router>
	<Navbar />
		<AuthProvider>
			<Switch>
				<PrivateRoute path='/' exact component={Home} />
				<Route path='/lessons' component={Lessons} />
				<Route path='/curriculum' component={Curriculum} />
				<Route path='/settings' component={Settings} />
				<Route path='/people' component={People} />
				<Route path='/log_out' component={Logout} />
				<Route path='/login' component={Login} />
			</Switch>
		</AuthProvider>
	</Router>

	
);
}

export default App;


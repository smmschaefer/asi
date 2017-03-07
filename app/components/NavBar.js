import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 


const TopNav = () => <div><Links /></div>;

const Links = () => 
	<nav>
		<Link to="/">Home |</Link>
		<Link to="/About">About |</Link>
		<Link to="/Contact">Contact </Link>
	</nav>

class NavBar extends Component {
	render() {
		return (
			<div>
				<TopNav />
			</div>
		)
	}
}

export default NavBar;
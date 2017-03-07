import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import sass from '../scss/application.scss'

const TopNav = () => <div><TopLogo /><Links /></div>;

const TopLogo = () => <div className="asiTop"><p className="asiTopAnimation">Advanced Surface Innovations</p></div>;

const Links = () => 
	<nav>
		<Link className="pulseTxt" to="/">Home </Link>
		<Link className="pulseTxt" to="/About">About </Link>
		<Link className="pulseTxt" to="/Contact">Contact </Link>
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
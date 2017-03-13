import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import sass from '../scss/application.scss'

const TopNav = () => <div><TopLogo /><Links /></div>;

const ScrollNav = () => <div><Links /></div>;

const TopLogo = () => <div><p className="asiTopAnimation">Advanced Surface Innovations</p></div>;

const Links = () => 
	<nav>
		<Link className="pulseTxt" to="/">Home </Link>
		<Link className="pulseTxt" to="/About">About </Link>
		<Link className="pulseTxt" to="/Contact">Contact </Link>
	</nav>

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			nav: ''
		}
	}
	
	handleScroll(event) {
	    console.log('handleScroll invoked');
	}

	componentDidMount() {
	    console.log('componentDidMount invoked');
	    window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    console.log('componentWillUnmount invoked');
	    window.removeEventListener('scroll', this.handleScroll);
	}
	
	render() {
		return (
			<div>
				 <TopNav />
			</div>
		)
	}
}

export default NavBar;
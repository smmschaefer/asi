import React, { Component } from 'react'
import sass from '../scss/application.scss'
import Routes from '../config/Routes'
import NavBar from './NavBar'
import Footer from './Footer'


class Main extends Component {
	render() {
		return (
			<div className="container">	
				<center>
				<div className="navBar">
					<NavBar history={this.props.history}/>	
				</div>
				</center>
				<div>
					{this.props.children}
				</div>
				<div>
					<Footer />
				</div>
			</div>
		)
	}
}

export default Main;
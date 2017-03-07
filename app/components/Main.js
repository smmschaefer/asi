import React, { Component } from 'react'
import Routes from '../config/Routes';
import NavBar from './NavBar'


class Main extends Component {
	render() {
		return (
			<div>	
				<div>
					<NavBar history={this.props.history}/>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Main;
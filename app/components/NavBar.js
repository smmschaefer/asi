import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'

const TopNav = () => <div><TopLogo /><Links /></div>;

const ScrollNav = () => <div><Links /></div>;

const TopLogo = () => <div><p className="asiTopAnimation">Advanced Surface Innovations</p></div>;


/*const Links = () => 
	<nav>
		<Link className="pulseTxt" to="/">Home </Link>
		<Link className="pulseTxt" to="/About">About </Link>
		<Link className="pulseTxt" to="/Contact">Contact </Link>
	</nav>*/

class AppBars extends Component {
	constructor(props) {
		super(props) 
			this.state = {
				open: false
			}
	}
	
	//toggleDrawer = () => this.setState({open: !this.state.open});
	
	toggleDrawer() {
		this.setState({
			open: !this.state.open,
		});
	}
	
	render() {
		return(
			<div>
				<AppBar
                    title="Advanced Surface Innovations"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)} 
                />
                <Drawer open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)}>
					<MenuItem onTouchTap={this.toggleDrawer.bind(this)}>
					CLOSE ( X )
					</MenuItem>
					<MenuItem onTouchTap={this.toggleDrawer.bind(this)}><Link to="/"> 
						<FlatButton label="Home" primary={true} />
					</Link>
					</MenuItem>
					<MenuItem onTouchTap={this.toggleDrawer.bind(this)}><Link to="/About"> 
						<FlatButton label="About" primary={true} />
					</Link>
					</MenuItem>
        			<MenuItem onTouchTap={this.toggleDrawer.bind(this)}><Link to ="/Contact"> 
						<FlatButton label="Contact" primary={true} />
					</Link>
					</MenuItem>
				</Drawer>
			</div>
		)
	}
}

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
				 <AppBars />
			</div>
		)
	}
}

export default NavBar;
import React, { Component } from 'react'
import sass from '../scss/application.scss'
import Routes from '../config/Routes'
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'        
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
import NavBar from './NavBar'
import Footer from './Footer'


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 60,
  },
});

class Main extends Component {
	render() {
		return (
		   <MuiThemeProvider muiTheme={muiTheme}>
			<div className="mui-container-fluid">
				<div className="mui-row">
					<NavBar history={this.props.history} />
				</div>
				<div className="mui-row">
					{this.props.children}
				</div>		
			</div>
		  </MuiThemeProvider>
		)
	}
}

export default Main;


/*
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


*/
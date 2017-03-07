import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'


class Routes extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<Route path="About" component={About}></Route>
					<Route path="Contact" component={Contact}></Route>
					<IndexRoute component={Home}></IndexRoute>
				</Route>
			</Router>
		)
	}
}

export default Routes;
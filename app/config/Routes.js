import React, { Component } from 'react'
import { Route, Router, Redirect, IndexRoute, Link, hashHistroy } from 'react-router'


class Routes extends Componets {
	render() {
		return (
			<Router history = { hashHistory }>
				<Route path="/" component={Main}>
				</Route>
			</Router>
		)
	}
}

export default Routes;
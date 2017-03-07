import React, { Component } from 'react'
import sass from '../scss/application.scss'


const BannerImg = () => <div><img className="banner" src="/public/../../../img/ecolaViewPoint.jpg"></img></div>;

class Home extends Component {
	render() {
		return(
			<div>
				<BannerImg />
			</div>
		)
	}
}

export default Home;
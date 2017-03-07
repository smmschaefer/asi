import React, { Component, PropTypes } from 'react'


class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formValues: {
				name: '',
				message: ''
			}
		}
	}
	
	handleChange(event) {
		let formValues = this.state.formValues;
		let name = event.target.name;
		let value = event.target.value;
		
		formValues[name] = value;
		this.setState({
			formValues
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log("NEW FORM VALUES " + this.state.formValues.name + " " + this.state.formValues.messsage);
		//const {name, message} = this.formValues;
		
		//create and send email
		let sendName = this.state.formValues.name;
		let sendMsg = this.state.formValues.message;
		//window.open(`mailto:smmschaefer@gmail.com?subject=${sendName}&body=${sendMsg}`);
		// + "?cc=myCCaddress@example.com"
		let link = `mailto:smmschaefer@gmail.com?subject=${sendName}&body=${sendMsg}`;
	    window.location.href = link;
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Name:
						<input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
					</label> <br />
					Message: <br />
						<textarea type="text" name="message" placeholder="Message..." value={this.state.formValues["message"]} onChange={this.handleChange.bind(this)}></textarea> <br />
					<input type="submit" value="Submit" /> 
				</form>
			</div>
		)
	}
}



export default Contact;
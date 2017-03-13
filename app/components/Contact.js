import React, { Component, PropTypes } from 'react'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
 	marginLeft: 20,
};

const ContactForms = () => (
  <Paper zDepth={2}>
    <TextField style={style} floatingLabelText="Name" />
    <Divider />
    <TextField style={style} floatingLabelText="Subject"/>
    <Divider />
    <TextField  style={style} floatingLabelText="Message"/>
    <Divider />
  </Paper>
);

const SubmitButton = () => (
  <div>
    <RaisedButton label="SUBMIT" primary={true} fullWidth={true} />
    <br />
  </div>
);

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formValues: {
				name: '',
				subject: '',
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
		let sendSbj = this.state.formValues.subject;
		let sendMsg = this.state.formValues.message;
		//window.open(`mailto:smmschaefer@gmail.com?subject=${sendName}&body=${sendMsg}`);
		// + "?cc=myCCaddress@example.com"
		let link = `mailto:smmschaefer@gmail.com?subject=${sendSbj}&body=${sendMsg}%0D%0A%0D%0A- ${sendName}`;
	    window.location.href = link;
	}
	
	render() {
		return (
			<div>
				<ContactForms />
				<SubmitButton />
			</div>
		)
	}
}


export default Contact;


/*

				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Name:
						<input type="text" name="name" placeholder="Your Name" value={this.state.formValues["name"]} 
						onChange={this.handleChange.bind(this)} />
					</label> <br />
					<label>Subject: 
						<input type="text" name="subject" placeholder="Subject" value={this.state.formValues["subject"]} 
						onChange={this.handleChange.bind(this)} /> 
					</label> <br />
					Message: <br />
						<textarea type="text" name="message" placeholder="Message..." value={this.state.formValues["message"]} onChange={this.handleChange.bind(this)}></textarea> <br />
					<input type="submit" value="Submit" /> 
				</form>

*/
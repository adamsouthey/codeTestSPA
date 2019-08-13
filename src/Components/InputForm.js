import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const formStyle = {
  form: {
    width: '50vw',
    height: 'auto',
    margin: '0 auto',
    marginTop: '40px'
  },
  text: {
    fontSize: '20px'
  }
};
export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      hobby: 'Squash',
      showInfo: false
    };
  }

  handleChange = input => event => {
    this.setState(
      {
        [input]: event.target.value
      },
      () => {
        console.log('state', this.state);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      showInfo: true
    });
  };

  renderUserInfo() {
    return (
      <div>
        <p style={formStyle.text}>{`First Name: ${this.state.firstName}`}</p>
        <p style={formStyle.text}>{`Last Name: ${this.state.lastName}`}</p>
        <p style={formStyle.text}>{`Hobby: ${this.state.hobby}`}</p>
      </div>
    );
  }
  render() {
    const { firstName, lastName, hobby, showInfo } = this.state;

    return (
      <Form style={formStyle.form}>
        <FormGroup>
          <Label for='firstName'>First Name</Label>
          <Input
            type='text'
            name='firstName'
            value={firstName}
            onChange={this.handleChange('firstName')}
            placeholder='Please enter your first name'
          />
        </FormGroup>
        <FormGroup>
          <Label for='lastName'>Last Name</Label>
          <Input
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange('lastName')}
            placeholder='Please enter your last name'
          />
        </FormGroup>
        <FormGroup>
          <Label for='exampleSelect'>Select</Label>
          <Input
            type='select'
            name='hobby'
            value={hobby}
            onChange={this.handleChange('hobby')}
          >
            <option value='Squash'>Squash</option>
            <option value='Programming'>Programming</option>
            <option value='Swimming'>Swimming</option>
          </Input>
        </FormGroup>
        <Button color='danger' type='submit' onClick={this.handleSubmit}>
          Submit
        </Button>
        <hr />
        <FormGroup>
          <Label style={formStyle.textArea} />
          Display user information below:
          {showInfo ? this.renderUserInfo() : null}
        </FormGroup>
      </Form>
    );
  }
}

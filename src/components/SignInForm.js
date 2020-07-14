import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignInForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};
    }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="select" value={this.state.value}  />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect()(SignInForm)
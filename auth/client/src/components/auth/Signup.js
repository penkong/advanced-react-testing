import React, { Component } from 'react';
import { reduxForm , Field } from 'redux-form';
import { compose } from 'redux'; //allow to right multi hoc
import { connect } from 'react-redux';
import * as actions from '../../actions';

//history props come by redux router
class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history('/feature');
    }); 
  }   

  render() {
    const { handleSubmit } = this.props; //come from redux form these props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none"/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none"/>
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}
const mapStateToProps = state => {return { errorMessage : state.auth.errorMessage }}
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);

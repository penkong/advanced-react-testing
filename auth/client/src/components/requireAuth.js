import React, { Component } from 'react'
import { connect } from 'react-redux';

//boiler plate for hoc it work like connect
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {this.shouldNavAway();}
  
    componentDidUpdate() {this.shouldNavAway();}

    //history props pass with react router here.
    shouldNavAway(){
      if(!this.props.auth) this.props.history.push('/');
    }
    render() {
      return <ChildComponent {...this.props}/>
    }         
  } 
  const mapStateToProps = (state) => {
    return {auth : state.auth.authenticate };
  };

  return connect(mapStateToProps)(ComposedComponent);
} 


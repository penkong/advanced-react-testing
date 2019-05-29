import React, { Component } from 'react';
import { connect } from 'react-redux';
class CommentList extends Component {
  renderComment(){
    return this.props.comments.map(comment =>{
      return <li key={comment}>{comment}</li>
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderComment()}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({comments}) =>{ return { comments }};

export default connect(mapStateToProps)(CommentList);
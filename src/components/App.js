import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  renderButton(){
    
  }
  renderHeader(){
    return (
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/post">POST A COMMENT</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }
  render() {
    return (
      <div>
      <Route path="/post" component={CommentBox}/>
      <Route path="/" exact component={CommentList}/>
    </div>
    );
  }
}

export default App;
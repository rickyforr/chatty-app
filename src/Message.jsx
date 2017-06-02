import React, {Component} from 'react';

class Message extends Component {
componentDidMount () {
  console.log('from message: ',  this.props)
}
  parseType() {

    switch(this.props.message.type) {
      case 'postNotifiction':
      console.log('post')
        return (<span className="message-content myMessage">user {this.props.message.user} has changed their name to user {this.props.currentUser}</span>);
        break;
      case 'postMessage':
        return (<span className="message-content error">{this.props.message.content}</span>);
        break;



    }
  }
  render(){
    return (
      <div className="message">
        <span className="message-username">{this.props.message.username}</span>
        {this.parseType()}
      </div>
    );
  }
}
export default Message;
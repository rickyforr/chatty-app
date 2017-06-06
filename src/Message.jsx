import React, {Component} from 'react';

class Message extends Component {

  parseType() {
    //create DOM element and display message differently depending on whether it's a notification or a message
    switch(this.props.message.type) {
      case 'postNotifiction':
        return (<span className="message-content notification">user {this.props.message.user} has changed their name to {this.props.message.newUser}</span>);
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
import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages.map((message, i) => {
      //console.log(this.props.messages)
      return (
        <Message

            username={message.username}
            content={message.content}/>

    )
  })
    return (

<main className="messages">
   { messages }
  <div className="message system">

  </div>
</main>

  );
  }
}
export default MessageList;

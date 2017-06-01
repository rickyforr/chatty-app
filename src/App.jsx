import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

constructor(props) {
    super(props);
    this.state =
    {
  currentUser: {name: 'Mike'},
  messages: []
    }

  }


onNewMessage(content) {

   // creating new message based on text entered in chat bar
   // when connected to web socket send message data to server
  // this.ws.send(JSON.stringify(bobMessage))
  const newMessage = JSON.parse(content.data)
   console.log(content.data)
  this.setState({messages: this.state.messages.concat(newMessage)})

  }

onSendMessage(content) {

  const sendJson = {type: 'postMessage', username: (this.state.currentUser.name), content: content}
  this.ws.send(JSON.stringify(sendJson))

}



componentDidMount() {

  this.ws = new WebSocket("ws://localhost:3001/");


  this.ws.onmessage = this.onNewMessage.bind(this)

}


onNameChange(user) {
  console.log('from onNameChange: ', this.ws)
  this.setState({currentUser: {name: user}})

  const notification = {type: 'postNotifiction', }

}







  render() {
    return (
<div>
<nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>
<MessageList messages = {this.state.messages} ></MessageList>
<ChatBar onMessage={ this.onNewMessage.bind(this)} nameChange={this.onNameChange.bind(this)} sendMessage={this.onSendMessage.bind(this)} messageObj = {this.state} ></ChatBar>
</div>

    );
  }
}
export default App;

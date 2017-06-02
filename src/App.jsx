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

  const newMessage = JSON.parse(content.data)

  console.log('from recieving message: ',  this.state.currentUser.name)

  this.setState({messages: this.state.messages.concat(newMessage), current: this.state.currentUser.name})


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
  console.log('from onNameChange: ', this.state.currentUser.name)


  const notification = {type: 'postNotifiction', user: this.state.currentUser.name}
  // console.log(notification)
  this.ws.send(JSON.stringify(notification))
  this.setState({currentUser: {name: user}})
}







  render() {
    return (
<div>
<nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>
<MessageList messages = {this.state.messages} currentuser = {this.state.currentUser} ></MessageList>
<ChatBar onMessage={ this.onNewMessage.bind(this)} nameChange={this.onNameChange.bind(this)} sendMessage={this.onSendMessage.bind(this)} messageObj = {this.state} ></ChatBar>
</div>

    );
  }
}
export default App;

import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Header from './Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ''},
      messages: [],
      clients: {size: 1}
    }
  }

//function that takes message data when it is recieved and updates the state according to what type of notification was recieved from the server
onNewMessage(content) {
  const newMessage = JSON.parse(content.data)

  switch(newMessage.type) {
    case 'postNotifiction':
      return (this.setState({messages: this.state.messages.concat(newMessage), current: this.state.currentUser.name}));
      break;
    case 'postMessage':
      return (this.setState({messages: this.state.messages.concat(newMessage), current: this.state.currentUser.name}));
      break;
    case 'clientSize':
      //
      return ( $('.client-size').text(newMessage.size + ' chatters online'));
      break;
  }
}


  //retieve message user typed into chatbar and send to server with current user name. set type to 'postmessage'
  onSendMessage(content) {
    const sendJson = {type: 'postMessage', username: (this.state.currentUser.name), content: content};
    this.ws.send(JSON.stringify(sendJson));
  }

  //make connection with websocket server when component mounts
  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:3001/");
    this.ws.onmessage = this.onNewMessage.bind(this);
  }

  //when user enters new name in field send to server with the new user and current user names. set type to notification.
  onNameChange(user) {
    console.log('from onNameChange: ', this.state.currentUser.name, user)
    const notification = {type: 'postNotifiction', user: this.state.currentUser.name, newUser: user};
    this.ws.send(JSON.stringify(notification));
    this.setState({currentUser: {name: user}});
  }


  render() {
      return (
        <div>
          <Header clients={this.state.clients}></Header>
          <MessageList messages = {this.state.messages} currentuser = {this.state.currentUser} ></MessageList>
          <ChatBar onMessage={ this.onNewMessage.bind(this)} nameChange={this.onNameChange.bind(this)} sendMessage={this.onSendMessage.bind(this)} messageObj = {this.state} ></ChatBar>
        </div>
      );
    }
  }
export default App;

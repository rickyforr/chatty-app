import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: this.props.messageObj.currentUser.name
    }
      this.onContent = this.onContent.bind(this);
      this.handleKeyPress= this.handleKeyPress.bind(this);
      this.handleName = this.handleName.bind(this);
      this.changeName = this.changeName.bind(this);
  }

  //sets content to what is typed in chatbar-message input field
  onContent(event) {
    this.setState({ content: event.target.value });
  }

  //sets user to what is typed into the chatbar-username input field
  handleName(event) {
    this.setState({ user: event.target.value })
  }


  changeName(event) {
    if(event.charCode==13){
      this.props.nameChange(this.state.user);
    }
  }

  //function that handles key press and if enter key is pressed calls onMessage function
  handleKeyPress(event) {
    if(event.charCode==13){
      this.props.sendMessage(this.state.content);
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input onInput = {this.handleName }  onKeyPress= {this.changeName} className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.messageObj.currentUser.name}/>
        <input
          onInput = { this.onContent}
          className="chatbar-message" onKeyPress= {this.handleKeyPress}  placeholder="Type a message and hit ENTER" defaultValue={this.state.content}/>
      </footer>
    );
  }
}
export default ChatBar;

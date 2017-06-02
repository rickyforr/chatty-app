import React, {Component} from 'react';


class Header extends Component {



constructor(props) {
  super(props);


  this.state = {
    size: this.props.clients.size


  }
   console.log('from header: ', this.state)
}

componentWillReceiveProps(nextProps) {
  this.setState({size: this.props.clients.size})

}


clientSize() {
  const size = this.props.clients.size
  return size;
}

render() {


return (
       <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty {this.state.size} </a>
  <a className='client-size'></a>

</nav>

    );
  }

}
export default Header;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {
    user: '',
  }

  componentDidMount(){
    this.getUser();
  }

  getUser = () => {
    const user = JSON.parse(localStorage.getItem('user')).name;
    this.setState({
      user,
    })
  }

  render() {
    const { user } = this.state;
  
    return (
      <header>
        <h1>Anime Quotes</h1>
        <h2>{user}</h2>
        <Link to="/favorites">Favorites</Link>
        <Link to="/home">Home</Link>
      </header>
    )
  }
}

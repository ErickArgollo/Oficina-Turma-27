import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    user: '',
  }

  saveUserInLocalStorage = () => {
    const { user } = this.state;
    const { history } = this.props;
    localStorage.setItem('user', JSON.stringify({ name: user }))
    history.push("/home");
  }


  render() {
    const { user } = this.state;
    return (
      <div>
        <input type="text" onChange={ ({target}) => this.setState({ user: target.value}) }/>

        <button type="button" disabled={user.length < 3} onClick={ this.saveUserInLocalStorage }>Login</button>
      </div>
    )
  }
}

import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from './actions/UserActions'

import LoginCmp from './cmps/LoginCmp'

class _App extends React.Component {

  handleSubmit = (user) => {
    console.log('user', user);
    this.props.doLogin(user)
  }

  renderUser(user) {
    return (
      <div>
        Hello <b>{user.name}!</b>

        <pre>{`${JSON.stringify(user, null, 2)}`}</pre>
      </div>
    )
  }

  render() {
    const user = this.props.user
    return (
      <div className="app">
        {!user && <LoginCmp onSubmit={this.handleSubmit}/>}
        {user && this.renderUser(user)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.user,
  }
}

const mapDispatchToProps = {
  doLogin
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
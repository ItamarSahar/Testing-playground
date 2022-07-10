import React from 'react'

import AppTitle from '../AppTitle'
import InputCmp from '../InputCmp'

class LoginCmp extends React.Component {
  
    state = {
        username: '',
        password: ''
    }

    handleChange = (field) => {
        this.setState({...this.state, ...field})
    }

    onSubmitForm = (ev) => {
        ev.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        const errors = this.props.errors || {}
        const isSubmitAllowed = this.state.username !== '' && this.state.password !== ''
        const btnClasses = `btn btn-submit ${!isSubmitAllowed ? 'is-block' : ''}`

        return (
            <form className="login-cmp" autoComplete="off" onSubmit={this.onSubmitForm}>
                <AppTitle>Login</AppTitle>
                <div className="field">
                    <InputCmp name={"username"} 
                            label={"Username"} 
                            type={"text"} 
                            value={this.state.username} 
                            onChange={this.handleChange} />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="field">
                    <InputCmp name={"password"} 
                            label={"Password"} 
                            type={"password"} 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button className={btnClasses} disabled={!isSubmitAllowed}>Login</button>
                {errors.general && <p className="error">{errors.general}</p>}
            </form>
        )
    }
}

export default LoginCmp

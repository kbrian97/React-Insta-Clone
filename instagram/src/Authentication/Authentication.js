import React from 'react'
import PostPage from '../components/PostPage/PostPage';

const authentication = (App) => {
  return class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            isLoggedIn: false
        }
    }

    loginButton = (user) => {
        const username = localStorage.setItem("user", user)
        this.setState({
            isLoggedIn: true,
            username: username
        })
    }

    render() {
        return !this.state.isLoggedIn ? (
            <Login clicked={this.loginButton} />
        ) : (
                <PostPage />
                    )
    }
  }
}

export default authentication

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CommentSection.css'
import moment from 'moment'

export default class CommentSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes: this.props.likes,
      isLiked: false,
      comments: [],
      user: localStorage.getItem("user"),
      newComment: "",
      heart: "far fa-heart fa-2x",
      isLiked: false
    }
  }

  componentDidMount() {
    this.setState({comments: this.props.dummyData})
  }

  isLikedHandler = () => {
    if (!this.state.isLiked) { 
      let likes = this.state.likes + 1; 
      this.setState({
        likes,
        isLiked: true,
        heart: "fas fa-heart fa-2x"
      })
    }

    if (this.state.isLiked) {
      let likes = this.state.likes - 1;
      this.setState({
        likes,
        isLiked: false,
        heart: "far fa-heart fa-2x"
      })
    }
  }

  addNewComment = e => {
    e.preventDefault()
    let userInput = {
      username: this.state.user,
      text: this.state.newComment
    }

    const comments = this.state.comments.slice()
    comments.push(userInput)
    this.setState({
      comments: comments,
      newComment: ""
    })
  }

  newCommentHandler = e => {
    this.setState({
      user: "Brian",
      newComment: e.target.value
    })
  }

  render() {
    return (
      <div className="CommentsSection">
              <div className="UI-btn">
                <i className= {this.state.heart} onClick= {this.isLikedHandler}></i>
                <i className="far fa-comment fa-2x"></i>
              </div>

            <div>{this.state.likes} likes</div>

        {this.state.comments.map((dummy, index) => (
          <div className="Comments" key={index}>
            <h4> {dummy.username} </h4>
            <p> {dummy.text} </p>
          </div>
      ))}
      <div>{moment(this.props.timestamp,"MMM DO YYYY, h:mm:ss a").fromNow()}</div>
      <div className="addNewComment">
          <form onSubmit={this.addNewComment}>
          <input
          type="text"
          placeholder="Add New Comment..."
          name={this.props.newComment}
          value={this.state.newComment}
          onChange={this.newCommentHandler}
          />
          </form>
      </div>
      </div>
    )
  }
}

CommentSection.propTypes = {
  dummy: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

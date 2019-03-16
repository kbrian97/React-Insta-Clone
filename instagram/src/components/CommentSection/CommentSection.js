import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CommentSection.css'

export default class CommentSection extends Component {
  render() {
    return (
      this.props.dummyData.map((dummy, index) => (
        <div className="Comments" key={index}>
          <h4> {dummy.username} </h4>
          <p> {dummy.text} </p>
        </div>
      ))
    )
  }
}

CommentSection.propTypes = {
  dummy: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

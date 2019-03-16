import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'
import moment from 'moment'



export default class PostContainer extends Component {  
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    this.props.dummyData.map((data, index) => (
        <div className="PostContainer" key={index}>

          <div className="username">
            <img src={ data.thumbnailUrl } alt="name" />
            <p>{data.username}</p>
          </div>

            <img className="PostImg" src={data.imageUrl} alt="Error"/>

          <div className="UI-btn">
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-comment fa-2x"></i>
          </div>

            <p className="likes">{data.likes} likes</p>
            <CommentSection dummyData={data.comments}/>
            <p>{data.timestamp}</p>
        </div>
      ))
    )
  }
}

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

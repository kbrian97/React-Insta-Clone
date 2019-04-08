import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
import './PostContainer.css'
//import moment from 'moment'



const PostContainer = (props) => {  
    return (
    props.dummyData.map((data, index) => (
        <div className="PostContainer" key={index}>
          <div className="username">
            <img src={ data.thumbnailUrl } alt="name" />
            <p>{data.username}</p>

          </div>

            <img className="PostImg" src={data.imageUrl} alt="Error"/>

          

            <CommentSection dummyData={data.comments} likes={data.likes} timestamp={data.timestamp}/>
        </div>
      ))
    )
  }


PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;

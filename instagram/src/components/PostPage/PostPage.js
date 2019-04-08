import React, { Component } from 'react'
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

export default class PostPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            dummy: [],
            comments: [],
            filterPosts: []
        }
    }
    
    componentDidMount() {
            this.setState({
                dummy: dummyData,
                comments: dummyData.map(data => data.comments)
            })
        }

    SearchPostHandler = e => {
        e.preventDefault()
        const posts = this.state.dummy.filter(post => {
            if (post.username.includes(e.target.value)){
                return post;
            }
        })
        this.setState({ filterPosts: posts })
    }
    
    render() {
        return (
        <div className="PostPage">
    
            <SearchBar searchPost={this.SearchPostHandler}/>
    
            <div className="Container">
                <PostContainer dummyData={this.state.filterPosts.length > 0
                                            ? this.state.filterPosts : this.state.dummy
                                        }/>
            </div>
    
        </div>
        );
    }
    }


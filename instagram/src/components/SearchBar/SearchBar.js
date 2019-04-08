import React, { Component } from 'react'
import './SearchBar.css'
import PropTypes from 'prop-types'

const SearchBar = props => {
    return (
<div className="SearchBar">

        <div className="Insta-Icon">
            <i className="fab fa-instagram fa-2x"> | </i>
            <p>Instagram</p>
        </div>
            <input 
                type="input"
                placeholder="Search"
                onChange={props.searchPost}
            />
    <div className="Icons">
        <i className="far fa-compass fa-2x"></i>
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-user fa-2x"></i>
    </div>
</div>
    )
}

SearchBar.propTypes = {
    searchPost: PropTypes.func
}

export default SearchBar 

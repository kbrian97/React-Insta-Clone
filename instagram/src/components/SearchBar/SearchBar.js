import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
<div className="SearchBar">
        <div className="Insta-Icon">
            <i className="fab fa-instagram fa-2x"> | </i>
            <p>Instagram</p>
        </div>
            <input 
                type="input"
                name="search"
                placeholder="Search"
            />
    <div className="Icons">
        <i className="far fa-compass fa-2x"></i>
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-user fa-2x"></i>
    </div>
</div>
    )
}
}

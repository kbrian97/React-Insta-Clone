import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
        dummy: []
    }
  }

  componentDidMount() {
    this.setState({ dummy: dummyData });
  }

  render() {
    return (
      <div className="App">

        <SearchBar dummyData={dummyData}/>

        <div className="Container">
          <PostContainer dummyData={this.state.dummy}/>
        </div>

      </div>
    );
  }
}

export default App;

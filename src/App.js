import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'; 
import PostForm from './components/PostForm' ;
import {Provider} from 'react-redux' ;
// import { applyMiddleware } from 'C:/Users/Dell/AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';
import {store} from './store'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <PostForm />
      <Post />

    </div>
      </Provider>
     
    );
  }
}

export default App;

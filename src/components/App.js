import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import TweetPage from './TweetPage';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(loadInitialData());
  }
  render() {
    return (
    <BrowserRouter>
      <div className="container">
      <Nav/>
        {this.props.logged? 
        <Routes >
          <Route exact path="/" element= {<Dashboard />}/>
          <Route path="/new" element= {<NewTweet/>}/>
          <Route path="/tweet/:id" element= {<TweetPage/>}/>
        </Routes>
        :null
        }
      </div>
        
    </BrowserRouter>
        
        
    )
  }
}

export default connect(({authorId})=>({
  logged:authorId!==null
}))
(App)
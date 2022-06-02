import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';



export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar></NavBar>
          <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
          <Routes>
             
           
            <Route path="/" element={<News key="general"pageSize={this.pageSize} country="in" category="general"></News>} /> 
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general"></News>} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"></News>} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"></News>} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"></News>} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"></News>} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"></News>} />

          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

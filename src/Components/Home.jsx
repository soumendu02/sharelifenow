import React, { Component } from 'react'
import Footing from './Footing';
import Header from './Header';
import MainContent from './MainContent';
import PostSlider from './PostSlider';
import SideBar from './SideBar';
export class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <PostSlider/>
        <SideBar/>
        <MainContent/>
        <Footing/>
      </div>
    )
  }
}

export default Home
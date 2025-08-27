import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends Component{
  constructor(props){
    super(props)
    console.log("Parent Constructor");
  }

  // componentDidMount(){
  //   console.log("Parent ComponentDidMount");
  // }

  // - componentDidMount() sets up a timer (using setInterval) that runs every 1 second
  componentDidMount(){
    this.timer = setInterval(()=>{
      console.log("Parent ComponentDidMount")
    },1000)
  }

  // - componentWillUnmount() clears that timer when the component is removed from the DOM
  //   to prevent memory leaks, and also logs "componentWillUnMount".
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnMount");
  }

  render(){
    console.log("Parent Render");
    return (
    <div>
      About Section class Component
      <User name={"Akshay Saini (function)"}/>
      <UserClass name={"First (class)"}/>
      <UserClass name={"Second "}/>
      <UserClass name={"Third "}/>
    </div>
  )
  }
}



export default About

/**
 * -Parent Constructor
 * -Parent Render
 *    
 *  -First (class)Child Constructor
 *  -First (class)Child render
 * 
 *  -Second Child Constructor
 *  -Second Child render
 * 
 *  <DOM UPDATED - IN SINGLE BATCH>
 *  -First (class)Child Component Didmount
 *  -Second Child Component Didmount
 * 
 * 
 *  -Parent ComponentDidMount
 */
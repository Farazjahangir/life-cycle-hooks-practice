import React, { Component } from 'react';
import './App.css';
import Kid from './components/Kid/Kid'
import Teacher from './components/Teacher/Teacher'
import Judge from './components/Judge/Judge'

class App extends Component {
  constructor(){
    super()
    this.state = {
      recievedSteps : '',
      kid : true,
      judges : true,
      teacher : true,
      complete : false
    }
    this.recieveSteps = this.recieveSteps.bind(this)
    this.receiveApplaud = this.receiveApplaud.bind(this)
    this.showCompleted = this.showCompleted.bind(this)
  }

  recieveSteps(steps , arg){
    this.setState({recievedSteps : steps , flag : arg})
  }
  receiveApplaud(arg){
    this.setState({applaud : true}) 
  }
  showCompleted(){
    this.setState({judges : false , teacher : false , complete : true})
  }
  render() {
    const { recievedSteps , flag , applaud , kid , teacher , judges , complete} = this.state
    return (
      <div>
        <h1 className="header">Assignment 6</h1>
        <div className="text-center">
          {kid && <Kid dressColor={'blue'} furtherSteps = {recievedSteps} flag = {flag} applaud = {applaud} func = {this.showCompleted} />}
          {teacher && <Teacher steps = {this.recieveSteps}/>}
          {judges && <Judge applaudFunc = {this.receiveApplaud}/>}
          {complete && <h3>Show Finished</h3>}
          <button onClick = {()=>{this.setState({kid : false})}} className="btn btn-primary my-2">Ask Kid To Leave</button>
        </div>
      </div>
    );
  }
}

export default App;

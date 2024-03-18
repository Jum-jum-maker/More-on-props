import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textvalidation from './component/Textvalidation'


class App extends Component{

  state = ({initialStateInput:``})

  nameChangeHandler(event){
    this.setState({
      initialStateInput: event.target.value
    })
  }

    render()
    {

    return(
      <>
      <h1>Hi there</h1>
      <input  onChange={()=>this.nameChangeHandler(event)}type='text'/>
      <p>{this.state.initialStateInput.length}</p>
      <Textvalidation inputLength={this.state.initialStateInput.length}/>

      </>
    )
    }
  }

export default App

import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  increase = () =>{
    this.setState({
      count: this.state.count + 1
    })
  }
  decrease = () =>{
    if(this.state.count > 0){
    this.setState({
      count: this.state.count - 1})
    }
  }
  reset = () =>{
    this.setState({
      count: 0})
  }
  render(){
    return (
      <div>
        <h1>Counter App</h1>
        <div>
          <div className='count'>{this.state.count}</div>
          <div className='btn'>
          <button onClick={this.increase} className='btn-size'>+</button>
          <button onClick={this.decrease} className='btn-size'>-</button>
          <button onClick={this.reset} className='btn-size'>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}
export default App

import React, { Component } from 'react';
 import './App.css';
 import Header from './header.js'
 import Productlist from './productlist.js';
import Search from './search.js';
 class App extends Component {
  constructor(props){
    super(props);

    this.state={
      counter:0,
      searchQuery:''
    }
    this.handlaeSearchClick = this.handlaeSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addtoCart = this.addtoCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    //alternate
    // this.handlaeSearchClick =(data)=>{
    //   console.log(dtat);
    //   let currentState =this.state;
    //   currentState.count++;
    //   this.setState(currentState);
    // }

  }
  handlaeSearchClick(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }

  addtoCart(){
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }

  removeCart(){
    let currentState = this.state;
    if(currentState.counter == 0){
      this.setState(currentState);
    }else{
      currentState.counter--;
      this.setState(currentState);
    }
  }


  handleChange(data){
    console.log(data);
    let currentState = this.state;
    currentState.searchQuery =data;
    this.setState(currentState);
   
  }
  render() {
    return (
      <div> 
     
      <div className="container"> 
        <Header count={this.state.counter}/>
        <Search 
          search={this.handlaeSearchClick} 
          searchText={this.handleChange}
          />
          {/* <label className="badge">{this.state.counter}</label> */}
          <Productlist search={this.state.searchQuery} add={this.addtoCart} remove={this.removeCart}/>
       </div>
       </div>
    );
  }
}

export default App;

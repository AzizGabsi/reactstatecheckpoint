import './App.css';
import React, { Component } from 'react'
import Photo from "./photo.jpg"

class App extends React.Component {

   state = {
    Person : {fullName:"Aziz Gabsi", bio: "22 year old man", imgSrc:Photo, profession: "Full-Stack Web Developer"},
    shows: true
  }


  togglePerson = () => {
    this.setState(previousState => ({
      shows: !previousState.shows
    }))
  }

  render() {
    return (
      <div className='App'> {this.state.shows && (
      <>
        <img src={this.state.Person.imgSrc}/>
        <h3>{this.state.Person.fullName}</h3>
        <h3>{this.state.Person.bio}</h3>
        <h3>{this.state.Person.profession}</h3>
      </>
      )}
        <button className='button' onClick={this.togglePerson}>Click Here</button>
      </div>
    )
  };
}



export default App;
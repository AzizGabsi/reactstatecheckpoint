import './App.css';
import React, { Component } from 'react'
import Photo from "./photo.jpg"

class App extends Component {
  constructor() {
    super();
    this.state = {
    Person : {fullName:"Aziz Gabsi", bio: "22 year old man", imgSrc:Photo, profession: "Full-Stack Web Developer"},
    shows: true,
    count: 0
  }
  }

  togglePerson = () => {
    this.setState(previousState => ({
      shows: !previousState.shows
    }))
  }

countIncrement = () => {
  this.setState({count : this.state.count+1})
}

componentDidMount() {
  setInterval(this.countIncrement,1000)
}
  


  render() {
    return (
      <div className='App'> {this.state.shows && (
      <>
        <img src={this.state.Person.imgSrc}/>
        <h3>{this.state.Person.fullName}</h3>
        <h3>{this.state.Person.bio}</h3>
        <h3>{this.state.Person.profession}</h3>
        <h5>It has been {this.state.count} seconds since the component was mounted.</h5>
      </>
      )}
        <button className='button' onClick={this.togglePerson}>Click Here</button>
      </div>
    )
  };
}



export default App;
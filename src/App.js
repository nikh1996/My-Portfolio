import React from 'react';
import './App.css';
const position = ['Node.js developer', 'PHP developer', 'React learner'];
const positionCount = position.length;
let currentPosition = 0;

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <IntroDiv></IntroDiv>
      <AboutDiv></AboutDiv>
      <ContactDiv></ContactDiv>
    </div>
  );
}

function Navbar() {
  return (
    <div className="Navbar">
      <a href="#Intro" className="Navbar-button Home-button">Home</a>
      <a href="#About_me" className="Navbar-button About-button">About Me</a>
      <a href="#Contact_me" className="Navbar-button Contact-button">Contact</a>
    </div>
  )
}

function IntroDiv() {
  return (
    <section id="Intro" className="Background-section Intro-div">
    <div className="backgroundOverlay">
      <video autoPlay loop muted className="Background-video" src="water.mp4"></video>
    </div>
    <div className="Inner-text fadeIn">
      <h1 className="Title">Hi, I'm Nikh!</h1>
      <p className="fadeIn">I'm a </p><Position></Position>
    </div>
  </section>
  )
}

function AboutDiv() {
  return (
    <section id="About_me" className="Background-section About-div">
    <div className="Inner-text">
      <h1 className="Title">About me</h1>
    </div>
  </section>
  )
}

function ContactDiv() {
  return (
    <section id="Contact_me" className="Background-section Contact-div">
    <div className="Inner-text">
      <h1 className="Title">Like what you see?</h1>
    </div>
    <div className="row">
      <div className="half-col">
        <p>Download Resume</p>
        <button type="button" className="btn btn-success"><i className="far fa-file-pdf"></i>&nbsp;&nbsp;Download Resume</button>
      </div>
      <div className="half-col">
        <p>Contact Me</p>
      </div>
    </div>
  </section>
  )
}

class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPosition: currentPosition};

    ++currentPosition;

    if(currentPosition === positionCount) currentPosition = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentPosition: currentPosition
    });

    ++currentPosition;

    if(currentPosition === positionCount) currentPosition = 0;
  }

  render() {
    return (
      <p className="Subtitle">{position[this.state.currentPosition]}!</p>
    );
  }
}

export default App;

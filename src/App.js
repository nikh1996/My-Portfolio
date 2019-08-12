import React from 'react';
import './App.css';
const position = ['Node.js developer', 'PHP developer', 'React learner'];
const positionCount = position.length;
let currentPosition = 0;

function App() {
  return (
    <div className="App">
      <IntroDiv></IntroDiv>
      <AboutDiv></AboutDiv>
    </div>
  );
}

function IntroDiv() {
  return (
    <section id="Intro" className="Intro-div">
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
    <section id="About_me" className="About-div">
    <div className="Inner-text">
      <h1 className="Title">About me</h1>
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

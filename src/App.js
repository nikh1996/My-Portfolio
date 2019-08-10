import React from 'react';
import './App.css';
const position = ['Node.js developer', 'PHP developer', 'React learner'];

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
    <section id="Intro" className="App-header">
    <div className="backgroundOverlay"></div>
    <div className="Inner-text fadeIn">
      <h1 className="Title">Hi, I'm Nikh!</h1>
      <p className="fadeIn">I'm a </p><Position></Position>
    </div>
    <video autoPlay loop muted className="Background-video" src="water.mp4"></video>
  </section>
  )
}

function AboutDiv() {
  return (
    <section id="About_me" className="App-header">
    <div className="Inner-text">
      <h1 className="Title">About me</h1>
    </div>
  </section>
  )
}

class Position extends React.Component {
  constructor(props) {
    super(props);
    let randomPosition = Math.floor(Math.random() * (position.length));

    this.state = {randomPosition: randomPosition};
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
    let randomPosition = Math.floor(Math.random() * (position.length));

    this.setState({
      randomPosition: randomPosition
    });
  }

  render() {
    return (
      <p className="Subtitle">{position[this.state.randomPosition]}!</p>
    );
  }
}

export default App;

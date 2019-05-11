import React, { Component } from "react";

class AnimalSpotter extends Component {
  constructor(props) {
    super(props);
    this.state = { animalSpotted: 0 };
  }
  spotAnimal = () => {
    this.setState({ animalSpotted: ++this.state.animalSpotted });
  };
  render() {
    return (
      <div className="animal-spotter">
        <p>Number of animals spotted: {this.state.animalSpotted}</p>
        <CounterButton handleClick={this.spotAnimal} />
      </div>
    );
  }
}

function CounterButton(props) {
  return (
    <button
      style={{ background: "lightseagreen", color: "white" }}
      onClick={props.handleClick}
    >
      I spotted an animal!
    </button>
  );
}

export default AnimalSpotter;

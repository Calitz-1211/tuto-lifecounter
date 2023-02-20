import React from "react";
import "./index.css";

class HideDiv extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: true,
    };

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    this.setState({ showHide: !this.state.showHide });
    console.log();
  }

  render() {
    const { showHide } = this.state;
    return (
      <div>
        {showHide && (
          <div className="App-header">
            <div className="App-textbox">
              <h1>Play False Cacpot </h1>
              <button onClick={() => this.hideComponent()}>
                Hide First Name
              </button>
              <h3>
                Ceci est simplement un exercice !<br /> pour faire une landing
                avec un bouton au centre avant d avancer sur le jeu
              </h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HideDiv;

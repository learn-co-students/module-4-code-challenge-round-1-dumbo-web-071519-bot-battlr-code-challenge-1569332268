import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
// import BotSpecs from "../components/BotSpecs";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    bots: [],
    myArmy: [],
    currentBot: {}
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(res => this.renderBots(res));
  }

  renderBots = data => {
    
    
    this.setState({
      bots: data.slice()
    });
  };

  addToArmy = bot => {
    this.setState({
      myArmy: [
        ...this.state.myArmy, bot
      ]
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myArmy} />
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    );
  }
}

export default BotsPage;
import React from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    displayBots: [],
    usersBots: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          allBots: data,
          displayBots: data
        })
      );
  }

  addUserBots = id => {
    const chosenBot = this.state.displayBots.find(bot => bot.id === id);
    this.setState({
      usersBots: [...this.state.usersBots, chosenBot]
    });
  };

  sendUserBots = () => {
    return this.state.usersBots.map(bot => {
      return <BotArmy yourBots={bot} />;
    });
  };

  render() {
    return (
      <div>
        <BotCollection
          bots={this.state.displayBots}
          addUserBots={this.addUserBots}
        />
        {this.sendUserBots()}
      </div>
    );
  }
}

export default BotsPage;

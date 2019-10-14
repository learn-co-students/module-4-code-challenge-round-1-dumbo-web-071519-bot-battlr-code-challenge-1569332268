import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


class BotsPage extends React.Component {
state ={
  bots: [],
  displayedbots: [],
  yourBots: []
}

componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(res => res.json())
  .then(data => this.setState({
    bots: data,
    displayedbots: data
  }))
}


addBot = (botid) => {
      if (this.state.yourBots.includes(botid)) {
        console.log(this.state.yourBots);
      } else {
        this.setState({
          yourBots: [...this.state.yourBots, botid]
        });
      }
    };


  removeBot = (bot) => {
          const newBot = this.state.yourBots.filter(
    bott => bott.id !== bot.id
    );
    this.setState({
    yourBots: newBot
    });
    };


  render() {
    return (
      <div>
        <h1>Hello from BotsPage </h1>
        <br />
        <BotCollection addBot={this.addBot}
        bots={this.state.displayedbots}/>
        <YourBotArmy removeBot={this.removeBot} bots={this.state.yourBots}/>
        
      </div>
    );
  }

}

export default BotsPage;

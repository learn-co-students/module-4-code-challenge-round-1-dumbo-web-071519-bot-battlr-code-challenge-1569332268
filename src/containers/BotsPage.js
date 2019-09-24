import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    allBotsData: [],
    botArmy: [], //should I move this to YourBotArmy?
    toAddBot: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(botsData => this.setState({
      allBotsData: botsData
    }))
  }

  addToBotArmy = (bot) =>{ 
    this.setState({
      toAddBot: bot
    })
  }

  render() {
    //console.log(this.state.allBotsData)
    return (
      <div>
        {<YourBotArmy incomingBot={this.state.toAddBot}/>}
        {<BotCollection allBots={this.state.allBotsData} addToBotArmy={this.addToBotArmy}/>}
      </div>
    );
  }
}

export default BotsPage;

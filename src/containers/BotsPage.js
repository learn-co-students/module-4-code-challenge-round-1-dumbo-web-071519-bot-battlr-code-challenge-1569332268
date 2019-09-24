import React from "react";
import BotCollection from './BotCollection'
import BotCard from "../components/BotCard";
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    myBots: [],
    currentBot: ""
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bots: [data]
        })
      })
  }

  handleBotClick = (bot) => {
    if(!this.state.bots.includes(bot)){
      this.setState({
        bots: [...this.state.bots, bot]
      })
    }
  }

  handleArmyClick = (botObj) =>{
    const stateCopy = [...this.state.myBots]
    const newState = stateCopy.filter((bot) => {
      bot.id !== botObj.id
    })
    this.setState({
      myBots: newState
    })
  }

  

  

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick}/>
        <YourBotArmy myBots={this.state.myBots} handleArmyClick={this.handleArmyClick}/>
      </div>
    );
  }

}

export default BotsPage;

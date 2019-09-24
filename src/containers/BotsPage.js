import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  ///add owned attribute to bot, filter by owned to send to my bot army
  //collects bot by adding owned property to bot
  collectBot = (id) =>{
    const newBots = this.state.bots.map((bot) => {
      if(bot.id === id){
        return {...bot, owned: true}
      }
      else{
        return {...bot}
      }
    })
    this.setState({
      bots: newBots
    })
  } 

  // uncollects bot from bot army by making owned property false
  uncollectBot = (id) =>{
   const newBots = this.state.bots.map((bot) => {
      if (bot.id === id) {
        return { ...bot, owned: false}
      }
      else {
        return { ...bot }
      }
    })
    this.setState({
      bots: newBots
    })
  } 

  handleClick = (id) => {
    const bot = this.state.bots.find((bot) => bot.id === id)
    if(bot.owned){
      this.uncollectBot(id);
    } else{
      this.collectBot(id);
    }
  }

  // filters bots by owned to send to my bot army
  getOwnedBots = () => {
    return this.state.bots.filter((bot) => {
      return bot.owned
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} myBots={this.getOwnedBots()} />
        <BotCollection handleClick={this.handleClick} bots={this.state.bots}/> 
      </div>
    );
  }

}

export default BotsPage;

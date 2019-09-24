import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state ={
    bots: [],
    freeBots: [],
    userBots: [],
    selectedBot: null
  }

  enlistBot = (id) => {
    const newBot = this.state.freeBots.find((bot) => {
      return bot.id === id
    })
    // checking if the clicked bot is in the freeBots array
    if (newBot !== undefined) {
      this.setState({
        userBots: [...this.state.userBots, newBot],
        freeBots: this.state.freeBots.filter((bot) => {
          return (bot.id !== id)
        })
      })
    }
    // else it has to be in the userBots array
    else {
      const botToDischarge = this.state.bots.find((bot) => {
        return bot.id === id
      })

      this.setState({
        freeBots: [...this.state.freeBots, botToDischarge],
        userBots: this.state.userBots.filter((bot) => {
          return bot.id !== botToDischarge.id
        })
      })
    }

    // 4. REFACTOR
    this.setState({
      selectedBot: this.state.bots.find((bot) => {
        return bot.id === id
      })
    })

  }

  loadBots = (bots) => {
    this.setState({
      bots,
      freeBots: bots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.userBots} enlistBot={this.enlistBot}/>
        <BotCollection bots={this.state.freeBots} enlistBot={this.enlistBot} selectedBot={this.state.selectedBot}/>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(this.loadBots)

  }

}

export default BotsPage;

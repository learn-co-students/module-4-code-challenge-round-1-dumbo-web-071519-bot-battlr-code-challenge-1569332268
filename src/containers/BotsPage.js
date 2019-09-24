import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state ={
    bots: [],
    freeBots: [],
    userBots: []
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
      console.log(botToDischarge)

      this.setState({
        freeBots: [...this.state.freeBots, botToDischarge],
        userBots: this.state.userBots.filter((bot) => {
          return bot.id !== botToDischarge.id
        })
      })
    }

    // const newUserBotList = this.state.bots.filter((bot) => {
    //   return bot.id === id
    // })

    // this.setState({
    //   userBots: this.state.bots.map((bot) => {
    //     if(bot.id === id) return bot
    //   })
    // })

    // const newBotList = this.state.bots.filter((bot) => {
    //   return bot.id !== id
    // })
    // console.log(newBotList)


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
        <BotCollection bots={this.state.freeBots} enlistBot={this.enlistBot} />
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

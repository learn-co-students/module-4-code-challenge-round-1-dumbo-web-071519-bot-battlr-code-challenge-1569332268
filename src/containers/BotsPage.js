import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlisted: []
  }
  onEnlist = (bot) => {
    console.log("I am enlisted!", bot)
    //! First check if this bot is already on the list
    if (this.state.enlisted.includes(bot)) {
      alert('This bot is already enlisted!')
      return
    }
    //! If it's not, then enlist this bot
    this.setState({
      enlisted: [
        ...this.state.enlisted,
        bot
      ]
    })
  }

  onDischarge = (bot) => {
    console.log("I am being discharged!", bot)
    this.setState({
      enlisted: this.state.enlisted.filter(b => b !== bot)
    })
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsData => 
      this.setState({
        bots: botsData
      })
    )
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.enlisted} callback={this.onDischarge}/>
        <BotCollection bots={this.state.bots} callback={this.onEnlist}/>
      </div>
    );
  }

}

export default BotsPage;

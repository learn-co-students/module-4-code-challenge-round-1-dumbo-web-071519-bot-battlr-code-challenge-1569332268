import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlisted: [],
    show: false,
    showingBot: [],
    filtered: [],
    filterValue: "All"
  }
  onEnlist = (bot) => {
    console.log("I am enlisted!", bot)
    //! First check if this bot is already on the list
    if (this.state.enlisted.includes(bot)) {
      alert('This bot is already enlisted!')
      this.setState({
        show: false,
        showingBot: []
      })
      return
    }
    //! If it's not, then enlist this bot
    this.setState({
      enlisted: [
        ...this.state.enlisted,
        bot
      ],
      show: false,
      showingBot: []
    })
  }

  onDischarge = (bot) => {
    console.log("I am being discharged!", bot)
    //! Filter out the bot that you wanna remove
    this.setState({
      enlisted: this.state.enlisted.filter(b => b !== bot)
    })
  }

  changeToShow = (bot) => {
    this.setState({
      show: true,
      showingBot: bot
    })
  }

  onBack = () => {
    this.setState({
      show: false,
      showingBot: []
    })
  }

  filteredBots = (e) => {
    //? This makes React yell at me though...
    let botClass = e.target.value
    if(botClass === "All"){
      this.setState({
        filtered: this.state.bots,
        filterValue: "All"
      })
      return
    }
    this.setState({
      filtered: this.state.bots.filter(b => b.bot_class === botClass),
      filterValue: botClass
    })
  }

  renderView = () => {
    if(this.state.show){
      return <BotSpecs bot={this.state.showingBot} onEnlist={this.onEnlist} onBack={this.onBack}/>
    }
    else{
      // <BotCollection bots={this.state.bots} callback={this.onEnlist}/>
      return (<BotCollection bots={this.state.filtered} callback={this.changeToShow} filter={this.filteredBots} filterValue={this.state.filterValue}/>)
    }
  }


  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botsData => 
      this.setState({
        bots: botsData,
        filtered: botsData
      })
    )
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.enlisted} callback={this.onDischarge}/>
        {this.renderView()}
      </div>
    );
  }

}

export default BotsPage;

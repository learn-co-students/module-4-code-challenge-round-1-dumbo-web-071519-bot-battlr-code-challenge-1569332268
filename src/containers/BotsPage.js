import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    showPage: false,
    currentId : ''
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
      bots: newBots,
      showPage: false,
      currentId: ''
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

  
  pageState = (id) => {
    if (id){
      this.setState({
        showPage: true,
        currentId: id
      })
    } else {
      this.setState({
        showPage: false,
        currentId: ''
      })
    }
  }
  

  getShowPage = (id) => {
    const bot = this.state.bots.find((bot) => bot.id === id)
    console.log(bot);
    return (<BotSpecs handleClick={this.handleClick} pageState={this.pageState} bot={bot} />)
  }

  backToIndexPage = () => {
    return (<BotCollection handleClick={this.handleClick} pageState={this.pageState} bots={this.state.bots} /> )
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} myBots={this.getOwnedBots()} />
        {this.state.showPage ? this.getShowPage(this.state.currentId) : this.backToIndexPage()}
      </div>
    );
  }

}

export default BotsPage;

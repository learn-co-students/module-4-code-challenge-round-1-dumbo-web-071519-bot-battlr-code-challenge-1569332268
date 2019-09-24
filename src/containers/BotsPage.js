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

  // get bots upon component mount, set bots in state
  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }


  //collects bot by adding owned property to bot using map method
  collectBot = (id) =>{
    const newBots = this.state.bots.map((bot) => {
      if(bot.id === id){
        return {...bot, owned: true}
      }
      else{
        return {...bot}
      }
    })
    // resets page state to index page after adding owned property to bot
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
    //resets bots state
    this.setState({
      bots: newBots
    })
  } 


  // handles click on either botcard in your bot army or enlist button in bot specs by checking if bot.owned is true (or exists)
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

  // checks if id is true (exists) and sets page state to true with current id if an id is passed in, or false and empty srting if the boolean "false" is sent in
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
  
// returns show page for specific bot using current id in state
  getShowPage = (id) => {
    const bot = this.state.bots.find((bot) => bot.id === id)
    console.log(bot);
    return (<BotSpecs handleClick={this.handleClick} pageState={this.pageState} bot={bot} />)
  }

// returns index page
  backToIndexPage = () => {
    return (<BotCollection handleClick={this.handleClick} pageState={this.pageState} bots={this.state.bots} /> )
  }
  // displays page based on boolean set in state
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

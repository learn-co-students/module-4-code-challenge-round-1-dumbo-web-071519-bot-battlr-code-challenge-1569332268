import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

//disclaimer:
//this all worked!!!!!!!!! 
//if this code is broken later I will BORK or BJORK really loud. 
//I SWEAR this 100% worked supa well before I submitted it. 

//`BotPage` is the highest component below App,
// and serves as the main container for all of the pieces of the page.

class BotsPage extends React.Component {
  //start here with your code for step one
  
  /*
  State OBJ: {
    bots: an array of all the bots in the database,
    armyBots: an array of all the bots that the user has selected to be in their galactic army,
    clickedBot: the bot that has been clicked,
    checkSpecs: a boolean that indicates whether or not specs should be rendered. when a user clicks a bot, the value is true. When a user clicks either the "go back" or the "enlist" button in the BotSpecs component, the value is false.
  }
  */
  state={
    bots:[],
    armyBots:[],
    clickedBot: {},
    checkSpecs:false
  }

  /*
    Lifecycle method that makes a fetch request to the database and sets the value of bots in state to the array of bots in the database
  */
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(res=>this.setState({
      bots:res
    }))
  }

  /* 
    This event handler deals with when a botCard is clicked in the botCollection.
    it takes in an id, sets the value of clickedBot in state to the botObj returned by the findBotByID function, and then sets the value of checkSpecs to true
  */
  handleClickBot = (id) => {
    // console.log(id)
    // console.log(this.findBotById(id))
    this.setState({
      ...this.state,
      clickedBot: this.findBotById(id),
      checkSpecs: true
    },() => console.log("bot clicked!", this.state))
    
    //this.handleClickEnlist(id) //before refactor
  }


/*
This event handler is for when a user clicks the "enlist" button in the BotSpecs component.
It takes in an id, find the bot by that id, and then sends it to the enlistBot function
*/
  handleClickEnlist = (id) => {
    // console.log("i am a bot to be enlisted", this.findBotById(id))
    this.enlistBot(this.findBotById(id))
    // console.log("bots that are not this one", this.removeBot(id)) //oops
  }

  /**
  This event handler is for when a user clicks he "go back" button in BotSpecs
  it takes in no arguments, resets the value of clickedBot in state to an empty object and then sets the value of checkSpecs to false
 */

  handleClickGoBack = () => {
    console.log("...continue shopping")
    this.setState({
      ...this.state,
      checkSpecs: false,
      clickedBot: {}
    })
  }

  /*
    function to find a bot by id. takes in an ID and returns an object. 
  */
  findBotById = (id) => {
    return this.state.bots.find( (bot) => bot.id === id)
  }

  //oops misunderstood readme
  // removeBot = (id) => {
  //   console.log("enlist", id)
  //   return this.state.bots.filter( (bot) => bot.id !== id )
  // }

  /**
  This function adds the botObj to the array of armyBots in state.
  it takes in a botObj argument, adds the object to the array of armyBots and then resets the value of clickedBot in state to an empty object and the value of checkSpecs to false
  */
  enlistBot = (botObj) => {
    //console.log("enlist", botObj) //sick
    //basically a variable that stores a boolean that represents whether or not the bot is in 
    //the army already
    let test = this.state.armyBots.includes(botObj)
    //console.log("bot is in army", test)
    //if bot is already in the army
    if(!test){
      this.setState({
        ...this.state,
        checkSpecs: false,
        armyBots: [...this.state.armyBots, botObj],
        clickedBot:{}
      }, () => console.log("new army member", this.state))
    } else { 
      //otherwise don't do anything?
      this.setState({
        ...this.state,
        checkSpecs: false,
        clickedBot:{}
      }, () => console.log("i am already a klingon"))
      
    }
  }


  render() {
    // console.log(this.state)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.armyBots} />
        {this.state.checkSpecs ? <BotSpecs handleClickEnlist={this.handleClickEnlist} handleClickGoBack={this.handleClickGoBack} bot={this.state.clickedBot} /> : <BotCollection handleClick={this.handleClickBot} bots={this.state.bots} /> }
      </div>
    );
  }

}

export default BotsPage;

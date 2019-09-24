import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
state={
  bots: [],
  selectedBots: [],
  current: []
}
  showBot = (bot) => {
    this.setState({
      current: bot
    })
  }
componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(res=>res.json())
    .then(this.setBots)
}
setBots=(Bots)=>{
  this.setState({
    bots: Bots
  })
}
addBotToMyArmy=(bot)=>{
this.setState({
  selectedBots: [...this.state.selectedBots, bot]
})
}
  render() {
    return (
      <div>
        <BotCollection addBotToMyArmy={this.addBotToMyArmy} bots={this.state.bots} current={this.state.current} showBot={this.showBot} />
        <YourBotArmy addBotToMyArmy={this.addBotToMyArmy} bots={this.state.selectedBots}/>
      </div>
    );
  }

}

export default BotsPage;

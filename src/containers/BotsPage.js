import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
    super(props)
    this.state = {
      botsArray: []
  }
}

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then((data) => {
      console.log("data", data)
       this.setState({
         botsArray : data
        })
  })
  }

  showBots = () => {
    this.state.botsArray.map((bot) => { console.log(bot)
  }

  render() {
    return (
      <div>
        <BotCollection showBots={this.showBots()}/>
        <YourBotArmy />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage; 

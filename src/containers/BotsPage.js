import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    botCollection: [],
    yourBots: [],
    curViewBot: null,
    list: true
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botCollection => this.setState({ botCollection }));
  };

  seeDetails = (botId) => {
    this.setState({
      curViewBot: botId,
      list: false
    })
  };

  seeAll = () => {
    this.setState({
      curViewBot: null,
      list: true
    })
  };

  enlist = (botId) => {
    let newList = this.state.yourBots.slice()
    newList.push(botId)
    this.setState({
      yourBots: newList,
      curViewBot: null,
      list: true
    })
  };

  render() {

    let displayedView;
    let displayedBot = this.state.curViewBot ? this.state.botCollection.find(bot => bot.id === this.state.curViewBot) : null;


    if (this.state.list) {
      displayedView = <BotCollection botCollection={this.state.botCollection} view={this.seeDetails}/>
    } else {
      displayedView = <BotSpecs bot={displayedBot} seeAll={this.seeAll} enlist={this.enlist}/>
    }

    return (
      <div>
        <YourBotArmy {...this.state} view={this.seeDetails} />
        {displayedView}
      </div>
    );
  }
}

export default BotsPage;
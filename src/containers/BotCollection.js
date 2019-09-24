import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends Component {
  state = {
    currentBot: {}
  };
  
  setCurrentBot = bot => {
    this.setState({
      currentBot: bot
    });
  };



  renderBots = () => {
    if (!this.state.currentBot.id) {
      return (
        <div className="row">
          Collection of all bots
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} viewBot={this.setCurrentBot} />
          ))}
        </div>
      )
    } else {
      return (
        <BotSpecs
          bot={this.state.currentBot}
          enlist={this.props.addToArmy}
          goBack={this.clearCurrentBot}
          addToArmy={this.props.addToArmy}
        />
      );
    }
  };

  render() {
    return <div className="ui four column grid">{this.renderBots()}</div>;
  }
}

export default BotCollection;

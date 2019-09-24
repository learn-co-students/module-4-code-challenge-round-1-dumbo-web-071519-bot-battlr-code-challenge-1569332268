import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  getBots = () => {
    return this.props.myBots.map((bot) => {
      return <BotCard handleClick={this.props.handleClick} bot={bot} key={bot.id + "owned-bot"} pageState={this.pageState} inCollection={false} />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.getBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

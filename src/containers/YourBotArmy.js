import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // maps bots and sends in appropriate props, BOT object, bot key (with added string to differentiate it from bot cards in botcollection), pageState to trigger show page on bot if clicked and not owned, handleclick to delegate the triggering of pagestate for show page, or remove bot from collection when clicked in army, inCollection checkes if bot is coming from botArmy or botCollection
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

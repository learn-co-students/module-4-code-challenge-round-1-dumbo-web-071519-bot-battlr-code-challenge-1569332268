import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //thinking of giving YourBotArmy a state to have an array of the bots clicked here

  addBotToArmy = (bot) => {
    if (bot.id){
      return <BotCard bot={this.props.incomingBot} />
    }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {
              this.addBotToArmy(this.props.incomingBot)
            }
          </div>
        </div>
      </div>
    );
  }
};

export default YourBotArmy;

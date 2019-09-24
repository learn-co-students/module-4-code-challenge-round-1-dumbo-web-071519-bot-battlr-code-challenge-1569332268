import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
oneBot=()=>{
  return this.props.bots.map((bot) => {
    return < BotCard bot={bot} key={bot.id} addBotToMyArmy={this.props.addBotToMyArmy}  />

  })
}
  render()
  
  {
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.oneBot()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

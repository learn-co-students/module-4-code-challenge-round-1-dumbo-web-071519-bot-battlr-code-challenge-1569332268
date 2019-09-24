import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
 

  render(){
    const showMyArmy = () => {
      const myArmy = this.props.myBots
      return myArmy.map((bot) => {
        return <div >
          <BotCard handleArmyClick={this.props.handleArmyClick} bot_class={bot.bot_class} catchphrase={bot.catchphrase} id={bot.id} health={bot.health} name={bot.name} damage={bot.damage} armor={bot.armor} avatar_url={bot.avatar_url} /></div>
      })
    }
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showMyArmy}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

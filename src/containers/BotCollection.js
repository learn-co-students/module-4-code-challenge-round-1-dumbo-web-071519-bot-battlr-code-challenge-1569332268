import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  //your bot army code here...
  // maps bots and sends in appropriate props, BOT object, bot key, pageState to trigger show page on bot if clicked and not owned, handleclick to delegate the triggering of pagestate for show page, or remove bot from collection when clicked in army, inCollection checkes if bot is coming from botArmy or botCollection
  getBots = () => {
	  return this.props.bots.map((bot) => {
		  return <BotCard handleClick={this.props.handleClick} pageState={this.props.pageState} bot={bot} key={bot.id} inCollection={true} />
	  })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.getBots()}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

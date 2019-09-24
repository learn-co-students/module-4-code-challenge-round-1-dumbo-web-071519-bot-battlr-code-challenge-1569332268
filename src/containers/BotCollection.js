import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
	
    // showMeTheBots = () => {
	// 	console.log(this.props.bots)
	// 	return this.props.bots.map((bot) => {
	// 		return <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick} />
	// 	})
	// }
	
	
	
	render(){
		// console.log(this.props.bots.map(bot => bot))
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
    		  {this.props.bots.map((bot) => {
				  return <BotCard bot={bot} key={bot.id} handleBotClick={this.props.handleBotClick}/>}
				  )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

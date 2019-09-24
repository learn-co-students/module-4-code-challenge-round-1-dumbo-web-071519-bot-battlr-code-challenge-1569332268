import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  getBots = () => {
	  return this.props.bots.map((bot) => {
		  return <BotCard handleClick={this.props.handleClick} bot={bot} key={bot.id} inCollection={true}/>
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

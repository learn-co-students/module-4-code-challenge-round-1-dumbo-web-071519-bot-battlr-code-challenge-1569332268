import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
	const allBots = this.props.bots.map((bot)=>{
		return <BotCard addBot={this.props.addBot} bot={bot}/>
	})
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allBots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

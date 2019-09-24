import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	
	// renderBot = (bots) => {
	// 	bots.map(bot => {
	// 		return bot
	// 	})
	// }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					Collection of all bots
    		  {this.props.allBots.map(botObj => {
						return <BotCard bot={botObj} addToBotArmy={this.props.addToBotArmy}/>
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

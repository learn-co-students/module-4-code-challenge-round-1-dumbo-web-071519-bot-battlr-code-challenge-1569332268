import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
sendBotToBotCard=(singleBotData)=>{
	return <BotCard 
		key={singleBotData.id} 
		bot={singleBotData}
		addbothandler={this.props.addbothandler} />
}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
    		  {this.props.allbotdata.map(this.sendBotToBotCard)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

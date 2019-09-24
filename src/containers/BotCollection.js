import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here

 botHendler=()=>{
	 return this.props.bots.map((bot) => {


		 return < BotCard bot={bot} key={bot.id} addBotToMyArmy={this.props.addBotToMyArmy} showBot={this.props.showBot} current={this.props.current} />
})

 }
	showHendler = () => {
		return  < BotSpecs bot = { this.props.bot }/>
		
}
  render(){
	  console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				
				 {}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

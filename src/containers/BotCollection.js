import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here
  
  
botsMapping = this.props.bots.map((bot) => {
	 
	return	< BotCard bot = {bot}/>
				//   name = {bot.name} 
				//   health = {bot.health}
				//   damage = {bot.damage}
				//   armor = {bot.armor}
				//   bot_class = {bot.bot_class}
				//   catchphrase = {bot.catchphrase} 
				  
	
});  

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botsMapping}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;



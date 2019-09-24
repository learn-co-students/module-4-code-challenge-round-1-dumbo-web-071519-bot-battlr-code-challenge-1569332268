import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";



class BotCollection extends React.Component {

	constructor(props) {
		super(props);
		this.state = {bots: [],
					urbots: []};
		
	  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				<p> Hello From BotCollection! </p>


			statesSetter() => {
			
			}
				
    	
    		  Collection of all bots
			  {this.props.bots.map(bot => {
		

				return (
					<div>
						
					<BotCard bot={this.props.bots} />
				
					<div
					className="ui card"
					key={bot.id}
					onClick={() => 
						<YourBotArmy  bot={this.statesSetter}/>
						}
				  >
					<h1>Hello from BotCollection!</h1>
					
						<li>{bot.name}</li>
						<li>{bot.health}</li>
						<li>{bot.damage}</li>
						<li>{bot.armor}</li>
						<li>{bot.bot_class}</li>
						<li>{bot.catchphrase}</li>
						<img alt="oh no?" src={bot.avatar_url} />
						</div>
				  </div>
				  
				  
				  )






									})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;



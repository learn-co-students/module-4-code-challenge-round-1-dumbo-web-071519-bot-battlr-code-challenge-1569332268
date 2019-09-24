import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
		allBotData: [],
		currentBotArmy: []
  }

  	componentDidMount(){
		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
			.then(response => response.json())
				.then((botData)=>{ this.setState({allBotData: botData})
		})
  	}

  	handleAddBotToArmy=(event, botID)=>{
		  const botToAdd = this.findSelectedBot(botID);
		  const alreadyinArmy = this.state.currentBotArmy.includes((bot)=>{
			  console.log("bot id", bot.id)
			  console.log("new bot id", parseInt(botID))
			  return bot.id === parseInt(botID);
		  })
		  console.log("is in army?", alreadyinArmy)
		  // if(botToAdd is already in the bot army, just return)
		//   if(this.state.currentBotArmy.filter((bot)=>{
		// 	 return  bot.id === parseInt(botID)}
		// 	 )===null){

				 
		// 	 }
			 return this.setState({
				currentBotArmy: [...this.state.currentBotArmy, botToAdd[0]]
			  })

	}

	findSelectedBot=(botID)=>{
		
		return this.state.allBotData.filter((singleBotData)=>{
			return singleBotData.id === parseInt(botID)
		})
	}


  	render() {
    return (
      <div>
        <BotCollection allbotdata={this.state.allBotData} addbothandler={this.handleAddBotToArmy} />
		<YourBotArmy mybotarmy={this.state.currentBotArmy} />
      </div>
    );
  }

}

export default BotsPage;

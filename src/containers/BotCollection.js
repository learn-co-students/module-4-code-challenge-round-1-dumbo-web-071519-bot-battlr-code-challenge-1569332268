import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  state = {
	  bots : [],
	  yourArmy : []
  }


  componentWillMount() {
	  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
	  .then(response => response.json())
	  .then(data => this.setState({bots: data}))
  }

  addToYourArmy = (dataFromChild) => {
	this.setState({yourArmy: dataFromChild})
  }
  
  // I know I should put "Collection of all bots" before the Map iteration and contain the map
  // between the first Div layer in Curly Boys but totally ran out of time and got flustered
  // Most of my time was spent due to an error with the component tree order
  // Thanks for reviewing the code and I will get this down in time for the retake,
  // Your work is appreciated, awe, an avacado, thaaaaanks 🥑

  render(){
	  console.log(this.state.bots)
	  console.log(this.state.yourArmy) // ahhhh undefined
	  const botsArray = this.state.bots
	  return (botsArray.map(bot => {
		return (
			<div className="ui four column grid">
				<div className="row">
				Collection of all bots
				  {<BotCard bot={bot} addBot={this.addToYourArmy}/>}
				</div>
			</div>
	  )})
  	);
  }
}

export default BotCollection;

import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	renderBotCards = () => {
		return this.props.bots.map( bot => <BotCard key={bot.id} bot={bot} callback={this.props.callback}/>)
	}

	render(){
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.renderBotCards()}
				</div>
			</div>
		);
	}

};

export default BotCollection;

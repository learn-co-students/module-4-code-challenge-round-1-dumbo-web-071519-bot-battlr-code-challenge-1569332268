import React from "react";
import BotCard from "../components/BotCard";
import BotFilter from "../components/BotFilter"

class BotCollection extends React.Component {
	renderBotCards = () => {
		return this.props.bots.map( bot => <BotCard key={bot.id} bot={bot} callback={this.props.callback}/>)
	}

	render(){
		return (
			<div className="ui four column grid">
				<BotFilter filter={this.props.filter} filterValue={this.props.filterValue}/>
				<div className="row">
					{this.renderBotCards()}
				</div>
			</div>
		);
	}

};

export default BotCollection;

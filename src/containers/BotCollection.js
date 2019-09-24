import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	renderBotCards = () => {
		return this.props.bots.map( bot => <BotCard key={bot.id} bot={bot} callback={this.props.callback}/>)
	}

	render(){
		return (
			<div className="ui four column grid">
				<div className="row">
					<form onChange={(e) => this.props.filter(e)}>
						<label htmlFor="filter">Filter Bots by Class:</label>
						<select name="filter" id="filter" value={this.props.filterValue}>
							<option value="All">All</option>
							<option value="Defender">Defender</option>
							<option value="Support">Support</option>
							<option value="Assault">Assault</option>
						</select>
					</form>
				</div>
				<div className="row">
					{this.renderBotCards()}
				</div>
			</div>
		);
	}

};

export default BotCollection;

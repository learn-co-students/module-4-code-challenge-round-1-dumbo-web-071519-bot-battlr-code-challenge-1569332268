import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here



  handleCardClick=(id)=>{
  this.props.addUserBots(id)

  }
  displayCollection=()=>{
	return this.props.bots.map(bot => {
	  return <BotCard bot={bot} id={bot.id} key={bot.name} handleCardClick={this.handleCardClick} />
	}
	)
  }
  render() {
// console.log("botcollection:",this.props)
    return (
      <div className="ui four column grid">
        <div className="row">
         {this.displayCollection()}
        </div>
      </div>
    );
  }
}

export default BotCollection;

import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(r=><BotCard handleSubmit={this.props.addToArmy} key={r.id} bot={r} />)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

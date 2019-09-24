import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = ({botCollection, view}) =>{
	const bots = botCollection.map((bot,index) =>{
		return <div key = "bcol" className="ui column"><BotCard key={index} bot={bot} view={view}/></div>
	});


  	return (
  	  <div key="iu" className="ui four column grid">
    		<div key = "swor" className="row">
    		  {bots}
    		  Collection of all bots
    		</div>
  	  </div>
  	)
};

export default BotCollection;

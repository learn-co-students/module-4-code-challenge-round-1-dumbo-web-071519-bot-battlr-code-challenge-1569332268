import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  state ={
    botArmyToDisplay: []
  }

  // componentDidMount(){
  //   return this.setState({botArmyToDisplay: this.props.mybotarmy})
  // }


  // showBotArmy=()=>{
  //   const botArmyArray = this.state.botArmyToDisplay;
  //   return botArmyArray.map((bot)=>{
  //     return <BotCard key={bot.id} bot={bot} />

  //   })
  // }

  // addBotArmyToPage=()=>{
  //   return this.setState({botArmyToDisplay: this.props.mybotarmy}, this.showBotArmy)
  // }

  sendBotToBotCard=(bot)=>{
    console.log(bot)
    return <BotCard 
      key={"army"+bot.id} 
      bot={bot}
      addbothandler={(event, id)=>{console.log("lol nothing happens")}}/>
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.mybotarmy.map(this.sendBotToBotCard)}
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

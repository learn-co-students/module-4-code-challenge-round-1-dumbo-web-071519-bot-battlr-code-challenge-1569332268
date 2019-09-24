import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({bots: data})
    })
  }

  addToArmy = (event, id) => {
    const newMember = this.state.bots.find(r=>r.id===id)
    const alreadyInArmy = this.state.army.map(r=>r.id)
    if (!alreadyInArmy.includes(id)){
      this.setState({army: [...this.state.army, newMember]})
    }
  }

  deleteFromArmy = (event, id) => {
    const deleteThisMember = this.state.army.find(r=>r.id===id)
    let newArmy = [...this.state.army]
    let index = this.state.army.indexOf(deleteThisMember)
    newArmy.splice(index, 1)
    this.setState({army:newArmy})
  }


  // Refactoring strategy

  //on line 44 instead of an addtoArmy callback to the BotCollection there would be a different callback
  //acting as a "handle Submit" for the bot cards in the collection
  //that displays a BotSpec

  //each botSpec would recieve a bot object (with all the info, id, picture etc) as a prop

  //the "add to army" button botSpec would recieve the current "add to army" callback on line 21

  //the return back button would recieve a callback that rerenders the bot collection

  //in order to replace Bot Collection with a Bot Spec ... ? 


  render() {
    return (
      <div>
        <YourBotArmy deleteFromArmy={this.deleteFromArmy} army={this.state.army} />
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;

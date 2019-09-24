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

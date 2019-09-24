import React from "react";
import BotCard from "../components/BotCard";
// `BotCollection` and`YourBotArmy` are container components. 
// `BotCollection` is where all the bots will be displayed, 
// while `YourBotArmy`(the green portion on the top of the screen) 
// will only display the bots that have been selected by the user.

// ### 2.  Indexing bots
// After you have fetched the bots, work on rendering them into`BotCollection`,
// which should be a child of`BotsPage`.
//A component called`BotCard` has been provided to you to display the information 
//about an individual bot in a list format.


class BotCollection extends React.Component {
  //your code here
    //sortBy resembles the key of the object by which a user wishes to sort the bots by
    state={
        sortBy:""
    }
  //returns a list of botCards
  renderBots = (bots) => {
    //   return this.props.bots.map((bot) => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot} />)
    return bots.map((bot) => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot} />)
  }
//click sort button with type as a parameter
  handleClick = (type) => {
    console.log("clicked a sort by", type)
    this.setState({
        sortBy:type
    })
  }

  //sort changes the original array bc of some weird pointer array shit idk 
  //so i made a variable and set it equal to bots using the spread operator
  //idk plz help
  handleSort = (type) => {
      let unsortedBots = [...this.props.bots]
    // unsortedBots = [...this.props.bots]
    return unsortedBots.sort(function (a, b) {
          return a[type] - b[type];
    });
  }

  render(){
    let bots = []
    this.state.sortBy === "" ? bots = this.props.bots : bots = this.handleSort(this.state.sortBy)
      return (
        <div className="ui four column grid">
            <div className="four wide column">
                {/* <button className="ui button fluid"> sort by name </button> */}
                <button onClick={() => this.handleClick("health")} className="ui button fluid"> sort by health </button>
            </div>
            <div className="four wide column">
                <button onClick={() => this.handleClick("damage")} className="ui button fluid"> sort by damage </button>
            </div>			
            <div className="four wide column">
                <button onClick={() => this.handleClick("armor")} className="ui button fluid"> sort by armor </button>
            </div>
            <div className="four wide column">
                <button onClick={() => this.handleClick("")} className="ui button fluid"> unsorted </button>
            </div>
            <div className="row">
              {/*...and here..*/}
              {/* Collection of all bots */}
              {this.renderBots(bots)}
            </div>
        </div>
      );
  }

};

export default BotCollection;

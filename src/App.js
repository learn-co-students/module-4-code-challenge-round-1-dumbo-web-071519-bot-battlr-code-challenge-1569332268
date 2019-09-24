import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import BotCollection from "./containers/BotCollection";
import "./App.css";
  
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class App extends Component {

    constructor() {
      super();
      this.state = {bots: [
      ]};
    }
  
    componentDidMount() {
      fetch(API)
      .then(res => res.json())
      .then(fetchedBots => {
        this.setState({bots: fetchedBots})
        console.log(fetchedBots)

  
      })
      }
  



      render() {
        return (
          <div>
             <BotsPage bots={this.state.bots}/>
             <BotCollection bots={this.state.bots} />
            
       
          </div>
        );
      }
    }



export default App;

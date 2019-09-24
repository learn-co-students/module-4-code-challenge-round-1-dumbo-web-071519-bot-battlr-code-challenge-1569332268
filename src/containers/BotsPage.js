import React from "react";
import BotCard from "../components/BotCard";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
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


    })
    }

  render() {
    return (
      <div>
     	Hello from Botspage!


       <BotCard bot={this.props.bots} />

       {/* <BotCollection bots={this.props.bots} /> */}

 
      </div>
    );
  }

}

export default BotsPage;

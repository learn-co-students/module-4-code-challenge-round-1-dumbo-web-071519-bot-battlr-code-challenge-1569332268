import React from "react";
import BotCollection from "./BotCollection"
class BotsPage extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      bots: []
    }
  }
  //start here with your code for step one

  componentDidMount(){
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots";
    return fetch(url)
        .then(response => response.json())
        .then(data => this.setState({bots: data}))
        .catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        < BotCollection bots = {this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;

import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.army.map(r=><BotCard handleSubmit={this.props.deleteFromArmy} key={r.id} bot={r} />)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

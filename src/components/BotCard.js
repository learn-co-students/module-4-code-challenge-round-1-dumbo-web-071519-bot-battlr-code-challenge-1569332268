import React from "react";
// import BotCollection from "BotCollection";

const BotCard = props => {

  
  const { bot } = props;

  let botType;

  {
    props.bot.map(bot => {

      return  (
        <div
        className="ui card"
        key={bot.id}
        onClick={() => console.log("add code to connect event listener")}
      >
        <h1>Hello from BotCard!!</h1>

            <li>{bot.name}</li>
            <li>{bot.health}</li>
            <li>{bot.damage}</li>
            <li>{bot.armor}</li>
            <li>{bot.bot_class}</li>
            <li>{bot.catchphrase}</li>
            <img alt="oh no!" src={bot.avatar_url} />

      </div>
      
      
      )
    })
  }

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  props.bot.map(bot => {

  })
  return (

    
    <div className="ui column">




      <div
        className="ui card"
        key={bot.id}
        onClick={() => console.log("add code to connect event listener")}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;

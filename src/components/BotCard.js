import React from "react";
// `BotCard` and`BotSpecs` are presentational components that have been provided for you that will render out information about an individual bot formatted for a list view and for a full view, respectively.They are pre - styled, and it is your responsibility to get the data into them.

// ### 3.  Enlisting and Discharging bots
// Once the list is complete, work on the functionality of enlisting bots into your army. Clicking a card should add a bot to the user's list of bots. Bots that have been chosen should be displayed within `YourBotArmy`, which should also be a child of `BotsPage`  (feel free to reuse `BotCard`). 
//_A bot should be enlisted only once_. If you click on a bot in your army, that bot should be removed from your army.
// _Note that nothing needs to be persisted.Refreshing the page should clear out the current army._

const BotCard = props => {
  const { bot } = props;

  let botType;

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

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => props.handleClick(bot.id)}
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

import React from "react";

const seasonConfig = {
  Summer: {
    text: "Its Summer ! Lets hit the beach",
    iconName: "sun"
  },
  Winter: {
    text: "Omg !!!! Its too cold here",
    iconName: "snowflake"
  }
};

const whatSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else return lat > 0 ? "Winter" : "Summer";
};
const SeasonDisplay = (props) => {
  const season = whatSeason(props.lat, new Date().month);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon huge icon-left`} />
      <h2>{text} !</h2> <i className={`${iconName} icon huge icon-right`} />
    </div>
  );
};

export default SeasonDisplay;

import React from "react";
import classNames from "classnames";
import "./DayListItem.scss";

const formatSpots = (spots) => {
  if (spots === 0) {
    return "no spots remaining";
  } else if (spots === 1) {
    return "1 spot remaining";
  } else {
    return `${spots} spots remaining`;
  }
};

const DayListItem = (props) => {
  const dayClass = classNames("day-list__item", {
    "day-list__item": props.item,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li
      className={dayClass}
      data-testid="day"
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};

export default DayListItem;

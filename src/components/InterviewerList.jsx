import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

const InterviewerList = (props) => {
  const Interviewers = props.interviewers.map((item) => {
    return (
      <InterviewerListItem
        key={item.id}
        name={item.name}
        avatar={item.avatar}
        selected={item.id === props.value}
        setInterviewer={() => props.onChange(item.id)}
      />
    );
  });

  return (
    <>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{Interviewers}</ul>
      </section>
    </>
  );
};

export default InterviewerList;

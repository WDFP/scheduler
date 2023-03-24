import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

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

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

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

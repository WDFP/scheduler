import React from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  return (
    <>
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off">
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder="Enter Student Name"
              /*
            This must be a controlled component
            your code goes here
          */
            />
          </form>
          <InterviewerList
            /* your code goes here */
            interviewers={props.interviewers}
          />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button onClick={props.onCancel} danger>
              Cancel
            </Button>
            <Button onClick={props.onSave} confirm>
              Save
            </Button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Form;

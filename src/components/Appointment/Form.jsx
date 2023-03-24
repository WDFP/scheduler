import React from "react";
import { useState } from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = (props) => {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
  
    props.onSave(student, interviewer);
  }

  return (
    <>
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <input
              data-testid="student-name-input"
              className="appointment__create-input text--semi-bold"
              name="name"
              onChange={(e) => {
                setStudent(e.target.value);
              }}
              type="text"
              value={student}
              placeholder="Enter Student Name"
            />
            <section className="appointment__validation">{error}</section>
          </form>
          <InterviewerList
            interviewers={props.interviewers}
            value={interviewer}
            onChange={setInterviewer}
          />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button onClick={cancel} danger>
              Cancel
            </Button>
            <Button onClick={validate} confirm>
              Save
            </Button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Form;

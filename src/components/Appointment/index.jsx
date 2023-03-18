import React from "react";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch((e) => {
        transition(ERROR_SAVE, true);
      });
  }

  function deleteInterview() {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch((e) => {
        transition(ERROR_DELETE, true);
      });
  }

  function destroy(e) {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((e) => transition(ERROR_DELETE, true));
  }

  return (
    <>
      <article className="appointment">
        <Header time={props.time} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => transition(CONFIRM)}
            onEdit={() => transition(EDIT)}
          />
        )}
        {mode === CREATE && (
          <Form
            interview={props.interview}
            interviewers={props.interviewers}
            onCancel={back}
            onSave={save}
          />
        )}
        {mode === SAVING && <Status message="Saving" />}
        {mode === DELETING && <Status message="Deleting" />}
        {mode === CONFIRM && (
          <Confirm onConfirm={deleteInterview} onCancel={back} />
        )}
        {mode === EDIT && (
          <Form
            interviewers={props.interviewers}
            interviewer={props.interview.interviewer}
            student={props.interview.student}
            onSave={save}
            onCancel={back}
          />
        )}
        {mode === ERROR_SAVE && <Error message="Error Saving" onClose={back} />}
        {mode === ERROR_DELETE && (
          <Error message="Could not Cancel Appointment" onClose={back} />
        )}
      </article>
    </>
  );
};

export default Appointment;

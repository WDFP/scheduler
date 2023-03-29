const getAppointmentsForDay = (state, day) => {
  const newDay = state.days.find((days) => days.name === day);

  if (!newDay || newDay.appointments.length === 0) {
    return [];
  }
  const result = newDay.appointments.map((Id) => {
    return state.appointments[Id];
  });
  return result;
};

const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  const interviewerData = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewerData,
  };
};

const getInterviewersForDay = (state, day) => {
  const newDay = state.days.find((days) => days.name === day);

  if (!newDay || !newDay.interviewers) {
    return [];
  }
  const result = newDay.interviewers.map((Id) => {
    return state.interviewers[Id];
  });
  return result;
};

export { getAppointmentsForDay, getInterview, getInterviewersForDay };

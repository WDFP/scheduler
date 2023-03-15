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

export { getAppointmentsForDay, getInterview };

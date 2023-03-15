const getAppointmentsForDay = (state, day) => {
  const newDay = state.days.find((days) => days.name === day);

  if (!newDay || newDay.appointments.length === 0) {
    return [];
  }
  const result = newDay.appointments.map((Id) => {
    return state.appointments[Id];
  });
  return result;
}

export  { getAppointmentsForDay };

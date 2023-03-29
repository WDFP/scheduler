import axios from "axios";
import { useEffect, useState } from "react";

function useApplicationData() {
  const setDay = (day) => setState({ ...state, day });
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const updateSpots = (appointments) => {
    const dayOfWeek = state.days.find((day) => day.name === state.day);
    let counter = 0;
    dayOfWeek.appointments.forEach((id) => {
      if (appointments[id].interview === null) {
        counter++;
      }
    });
    const newDay = { ...dayOfWeek, spots: counter };
    const newDayArray = [...state.days];
    newDayArray[dayOfWeek.id - 1] = newDay;
    return newDayArray;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpots(appointments);
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments, days });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpots(appointments);
    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments, days });
    });
  }

  return {
    state,
    bookInterview,
    cancelInterview,
    setDay,
  };
}

export default useApplicationData;

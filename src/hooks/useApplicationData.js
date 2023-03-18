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

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const updateSpotsBookInterview = (appointment, id) => {
      if (
        state.appointments[id].interview === null &&
        appointment.interview !== null
      ) {
        const dayOfWeek = state.days.find((day) => day.name === state.day);
        dayOfWeek.spots--;
      }
    };

    updateSpotsBookInterview(appointment, id);
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments });
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

    const updateSpotsCancelInterview = (appointment, id) => {
      if (
        state.appointments[id].interview !== null &&
        appointment.interview === null
      ) {
        const dayOfWeek = state.days.find((day) => day.name === state.day);
        dayOfWeek.spots++;
      }
    };

    updateSpotsCancelInterview(appointment, id);
    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments });
    });
  }

  return {
    state,
    bookInterview,
    cancelInterview,
    setDay,
  }
}

export default useApplicationData;

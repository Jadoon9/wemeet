import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Calendar from "react-calendar";
// import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
// import monthGridPligin from "@fullcalendar/monthgrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import MainPageLayout from "../../components/MainPageLayout";
import Calendar from "../../components/Calendar/Calendar";
import { INITIAL_EVENTS } from "../../components/Calendar/eventsData";

function Calendarr() {
  const [date, setDate] = useState(new Date());

  const handleDateClick = (e) => {
    console.log(e);
  };
  return (
    <>
      <MainPageLayout
        title="Daily Calendar"
        breadcrum1="Dashboard"
        breadcrum2="Daily Calender"
        link1="/available"
        link2="/createroom"
      >
        <Calendar initialEvents={INITIAL_EVENTS} onChange={handleDateClick} />
      </MainPageLayout>
    </>
  );
}

export default Calendarr;

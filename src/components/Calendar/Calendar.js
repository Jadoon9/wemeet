import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const Calendar = ({ initialEvents, onChange }) => {
  return (
    <div>
      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialEvents={initialEvents}
        weekends={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={onChange}
      />
    </div>
  );
};

export default Calendar;

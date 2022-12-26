import FullCalendar from "@fullcalendar/react";
import { useSelector } from "react-redux";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from "../UiElements/Modal";
import Form from "../Formm";
import FormikField from "../Formm/FormikField";

const Calendar = ({ onChange, initialEvents }) => {
  return (
    <div>
      <>
        <Modal title="Add Event">
          <Form>
            <Form password="true" userName="true">
              <FormikField label="Event Name" name="eventName" type="text" />

              <FormikField label="Password" name="password" type="password" />
            </Form>
          </Form>
        </Modal>
      </>
      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialEvents={initialEvents.data}
        weekends={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={onChange}
        eve
      />
    </div>
  );
};

export default Calendar;

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from "../UiElements/Modal";

import FormikField from "../Formm/Formik/FormikField";
import FormikSelect from "../Formm/Formik/FormikSelect";
import Button from "../UiElements/Button";
import CalendarForm from "./CalendarForm";

const Calendar = ({
  onChange,
  initialEvents,
  showModal,
  handleModal,
  addNewEvent,
  eventClick,
  deleteEvent,
  selectedEvent,
  selectedStartDate,
}) => {
  return (
    <div>
      <Modal
        title="Add Event"
        closeButton="true"
        saveButton={addNewEvent}
        onClose={handleModal}
        showModal={showModal}
      >
        <CalendarForm
          onSubmit={addNewEvent}
          selectedEventTitle={selectedEvent?.title}
          selectedEventColor={selectedEvent?.backgroundColor}
          selectedEventStartDate={selectedEvent?.statrtDate}
          selectedEventEndDate={selectedEvent?.endDate}
          selectedStartDate={selectedStartDate}
          deleteEvent={deleteEvent}
          handleModal={handleModal}
        />
      </Modal>
      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        events={initialEvents}
        weekends={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={onChange}
        // eventAdd={}
        eventClick={(e) => {
          console.log(e.event, "eventceckkk");
          eventClick(e);
        }}
        eventRemove={(e) => console.log(e, "zasas")}
      />
    </div>
  );
};

export default Calendar;

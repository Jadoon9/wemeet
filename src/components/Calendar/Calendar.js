import FullCalendar from "@fullcalendar/react";
import { useSelector } from "react-redux";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from "../UiElements/Modal";
import Form from "../Formm";
import FormikField from "../Formm/FormikField";
import FormikSelect from "../Formm/FormikSelect";
import Button from "../UiElements/Button";

const Calendar = ({
  onChange,
  initialEvents,
  showModal,
  handleModal,
  addNewEvent,
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
        <Form eventName="true" onSubmit={addNewEvent}>
          <FormikField label="Event Name" name="eventName" type="text" />

          <FormikSelect name="eventColor" label="Category" type="select" />
          <Button
            type="submit"
            variant="primary"
            text="Save Changes"
            onClick={addNewEvent}
          />
        </Form>
      </Modal>

      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialEvents={initialEvents?.data}
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

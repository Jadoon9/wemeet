import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from "../UiElements/Modal";
import Form from "../Formm/Formik";
import FormikField from "../Formm/Formik/FormikField";
import FormikSelect from "../Formm/Formik/FormikSelect";
import Button from "../UiElements/Button";

const Calendar = ({
  onChange,
  initialEvents,
  showModal,
  handleModal,
  addNewEvent,
  eventClick,
  deleteEvent,
  selectedEvent,
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
        <Form
          eventName="true"
          onSubmit={addNewEvent}
          selectedEventTitle={selectedEvent?.title}
          selectedEventColor={selectedEvent?.textColor}
        >
          <FormikField label="Event Name" name="eventName" type="text" />
          <FormikSelect name="eventColor" label="Category" type="select" />
          <div className="d-flex justify-content-between">
            <div>
              <Button
                type="button"
                variant="danger"
                text="Delete Event"
                onClick={deleteEvent}
              />
            </div>
            <div>
              <Button
                type="button"
                variant="light"
                text="Close"
                onClick={handleModal}
              />
              <Button type="submit" variant="primary" text="Save" />
            </div>
          </div>
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
        initialEvents={initialEvents}
        weekends={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={onChange}
        // eventAdd={}
        eventClick={(e) => eventClick(e)}
        eventRemove={(e) => console.log(e, "zasas")}
      />
    </div>
  );
};

export default Calendar;

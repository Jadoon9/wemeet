import React, { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";

import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import Calendar from "../../components/Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, addSelectedEvent, getEvents } from "../../redux/store";
import {
  deleteCalenderEvents,
  getCalenderEvents,
  postCalenderEvents,
} from "../../components/Calendar/calendarThunk";
import { v4 as uuidv4 } from "uuid";
import {
  removeEvent,
  removeSelectedEvent,
} from "../../redux/slices/calendarSlice";
import { Helmet } from "react-helmet";

function Calendarr() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [saveDate, setSaveDate] = useState("");

  const { loading, data, selectedEvent } = useSelector(
    (state) => state.calendar
  );

  useEffect(() => {
    dispatch(getCalenderEvents());
  }, [dispatch]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleDateClick = (e) => {
    handleModal(true);
    setSaveDate(e);
  };

  const eventClickHandler = (e) => {
    const selected = {
      id: e.event.id,
      title: e.event.title,
      eventColor: e.event.textColor,
    };
    dispatch(addSelectedEvent(selected));
    handleModal(true);
  };

  const addNewEvent = (item) => {
    const data = {
      id: uuidv4(),
      title: item.eventName,
      eventColor: item.eventColor,
      start: saveDate.dateStr + "T12:00:00",
    };
    dispatch(postCalenderEvents(data));
    handleModal(false);
  };

  const handleDeleteEvent = () => {
    dispatch(deleteCalenderEvents(selectedEvent.id));
    dispatch(getCalenderEvents());
    handleModal(false);
  };

  return (
    <>
      <MainPageLayout
        title="Daily Calendar"
        breadcrum1="Dashboard"
        breadcrum2="Daily Calender"
        cardTitle="Calendar"
        link1="/"
        link2="/calendar"
      >
        {loading ? (
          <l1>Loading .... </l1>
        ) : (
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Dashboard | Calendar</title>
              <meta name="description" content="Full calendar with events " />
            </Helmet>
            {data && (
              <Calendar
                initialEvents={data}
                onChange={handleDateClick}
                showModal={showModal}
                handleModal={handleModal}
                addNewEvent={addNewEvent}
                eventClick={eventClickHandler}
                deleteEvent={handleDeleteEvent}
                selectedEvent={selectedEvent}
              />
            )}
          </>
        )}
      </MainPageLayout>
    </>
  );
}

export default Calendarr;

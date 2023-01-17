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
  updateCalenderEvents,
} from "../../components/Calendar/calendarThunk";
import { v4 as uuidv4 } from "uuid";
import {
  removeEvent,
  removeSelectedEvent,
} from "../../redux/slices/calendarSlice";
import { Helmet } from "react-helmet";
import moment from "moment";

function Calendarr() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const { loading, data } = useSelector((state) => state.calendar);

  // * get all events on initial render
  useEffect(() => {
    dispatch(getCalenderEvents());
  }, [dispatch]);

  // * open event modal on click
  const handleModal = () => {
    setShowModal(!showModal);
  };

  // * click on empty cell
  const handleDateClick = (e) => {
    setSelectedStartDate(moment(e.date).format("YYYY-MM-DDTHH:mm"));
    setSelectedEvent(null);
    handleModal(true);
  };

  // *  event add and update to db with post/patch
  const addNewEvent = (item) => {
    console.log(item, "checkitemselected");
    const data = {
      ...(selectedEvent === null && { id: uuidv4() }),
      title: item.eventName,
      backgroundColor: item.backgroundColor,
      borderColor: item.backgroundColor,
      start: item?.startDate,
      end: item?.endDate,
    };
    selectedEvent === null
      ? dispatch(postCalenderEvents(data))
      : dispatch(updateCalenderEvents({ id: selectedEvent.id, data }));
    dispatch(getCalenderEvents());
    handleModal(false);
  };

  // * click on already added event
  const eventClickHandler = (e) => {
    console.log(e.event, "eventcd");
    const selected = {
      id: e.event.id,
      title: e.event.title,
      backgroundColor: e.event.backgroundColor,
      statrtDate: moment(e.event.start).format("YYYY-MM-DDTHH:mm"),
      endDate: moment(e.event.end).format("YYYY-MM-DDTHH:mm"),
    };
    setSelectedEvent(selected);
    dispatch(addSelectedEvent(selected));
    handleModal(true);
  };

  // * delete selected event
  const handleDeleteEvent = () => {
    dispatch(deleteCalenderEvents(selectedEvent.id));
    dispatch(getCalenderEvents());
    handleModal(false);
  };

  console.log(selectedEvent, "selectedEvent");
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
                selectedStartDate={selectedStartDate}
              />
            )}
          </>
        )}
      </MainPageLayout>
    </>
  );
}

export default Calendarr;

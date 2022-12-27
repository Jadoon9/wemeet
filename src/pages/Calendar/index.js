import React, { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";

import MainPageLayout from "../../components/MainPageLayout";
import Calendar from "../../components/Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, getEvents } from "../../redux/store";
import {
  getCalenderEvents,
  postCalenderEvents,
} from "../../components/Calendar/actions";
import { v4 as uuidv4 } from "uuid";

function Calendarr() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [saveDate, setSaveDate] = useState("");
  const { loading, data, error } = useSelector((state) => state.calendar);

  const handleModal = (param) => {
    setShowModal(param);
  };

  const handleDateClick = (e) => {
    handleModal(true);
    setSaveDate(e);
    // const data = {
    //   id: uuidv4(),
    //   title: "test",
    //   start: e.dateStr,
    // };
    // dispatch(addEvent(data));
  };

  useEffect(() => {
    dispatch(getCalenderEvents());
  }, [dispatch]);

  const addNewEvent = (item) => {
    console.log(item, "iteemmm");
    const data = {
      id: uuidv4(),
      title: item.eventName,
      eventColor: item.eventColor,
      start: saveDate.dateStr + "T12:00:00",
    };
    console.log(data, "dataaa");
    dispatch(postCalenderEvents(data));
    // dispatch(addEvent(data));
    handleModal(false);
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
        {loading ? (
          <l1>Loading .... </l1>
        ) : (
          <Calendar
            initialEvents={data}
            onChange={handleDateClick}
            showModal={showModal}
            handleModal={handleModal}
            addNewEvent={addNewEvent}
          />
        )}
      </MainPageLayout>
    </>
  );
}

export default Calendarr;

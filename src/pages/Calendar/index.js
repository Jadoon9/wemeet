import React, { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";

import MainPageLayout from "../../components/MainPageLayout";
import Calendar from "../../components/Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, getEvents } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";

function Calendarr() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const calenderData = useSelector((state) => state.calendar);

  const handleModal = (param) => {
    setShowModal(param);
  };

  const handleDateClick = (e) => {
    handleModal(true);
    const data = {
      id: uuidv4(),
      title: "test",
      start: e.dateStr,
    };
    dispatch(addEvent(data));
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch, calenderData]);

  return (
    <>
      <MainPageLayout
        title="Daily Calendar"
        breadcrum1="Dashboard"
        breadcrum2="Daily Calender"
        link1="/available"
        link2="/createroom"
      >
        <Calendar
          initialEvents={calenderData}
          onChange={handleDateClick}
          showModal={showModal}
          handleModal={handleModal}
        />
      </MainPageLayout>
    </>
  );
}

export default Calendarr;

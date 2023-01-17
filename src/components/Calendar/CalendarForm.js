import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "../Formm/Formik/FormikField";
import FormikSelect from "../Formm/Formik/FormikSelect";
import Button from "../UiElements/Button";
// remaining  = validation for datetime, date, time, week , month , color
const CalendarForm = ({
  onSubmit,
  selectedEventTitle,
  selectedEventColor,
  selectedEventStartDate,
  selectedEventEndDate,
  selectedStartDate,
  deleteEvent,
  handleModal,
}) => {
  const initialValues = {
    eventName: selectedEventTitle || "",
    backgroundColor: selectedEventColor || "",
    startDate: selectedEventStartDate || selectedStartDate || "",
    endDate: selectedEventEndDate || "",
  };

  const validationSchema = yup.object({
    eventName: yup.string().required("Event Name field is required"),
    startDate: yup
      .string()
      .required("Start date is required")
      .matches(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
        "Invalid date time format, it should be yyyy-mm-ddThh:mm"
      ),
    endDate: yup
      .string()
      .required("End date is required")
      .matches(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
        "Invalid date time format, it should be yyyy-mm-ddThh:mm"
      ),
    // color: yup.string().required("Event Color  field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values, "valuueesss");
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="justify-content-center">
            <FormikField label="Event Name" name="eventName" type="text" />
            <FormikField
              name="startDate"
              label="Start Date"
              type="datetime-local"
            />
            <FormikField
              name="endDate"
              label="End Date"
              type="datetime-local"
            />
            <FormikSelect
              name="backgroundColor"
              label="Category"
              type="select"
            />

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
        );
      }}
    </Formik>
  );
};
export default CalendarForm;

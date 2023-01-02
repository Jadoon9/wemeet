import { configureStore } from "@reduxjs/toolkit";
import calendarSlice, {
  addEvent,
  getEvents,
  addSelectedEvent,
  removeSelectedEvent,
} from "./slices/calendarSlice";
import editorSlice, {
  setReactQuillInput,
  setCkEditorInput,
} from "./slices/EditorSlice";
import formSlice, { addFormData } from "./slices/formSlice";
import tableSlice from "./slices/tableSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    form: formSlice,
    table: tableSlice,
    editor: editorSlice,
  },
});

export {
  addFormData,
  addEvent,
  getEvents,
  setReactQuillInput,
  setCkEditorInput,
  addSelectedEvent,
  removeSelectedEvent,
};
export default store;

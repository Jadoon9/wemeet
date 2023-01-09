import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
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
import { logout } from "./slices/authSlice";
import formSlice, { addFormData } from "./slices/formSlice";
import tableSlice from "./slices/tableSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    form: formSlice,
    table: tableSlice,
    editor: editorSlice,
    auth: authSlice,
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
  logout,
};
export default store;

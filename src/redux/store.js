import { configureStore } from "@reduxjs/toolkit";
import calendarSlice, { addEvent, getEvents } from "./slices/calendarSlice";
import editorSlice, {
  setReactQuillInput,
  setCkEditorInput,
} from "./slices/EditorSlice";
import formSlice, { addData } from "./slices/formSlice";
import tableSlice from "./slices/tableSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
    form: formSlice,
    table: tableSlice,
    editor: editorSlice,
  },
});

export { addData, addEvent, getEvents, setReactQuillInput, setCkEditorInput };
export default store;

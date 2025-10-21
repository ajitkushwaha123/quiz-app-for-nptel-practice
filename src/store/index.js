import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./slices/subjectSlice";
import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    subject: subjectReducer,
    notification: notificationReducer,
  },
});

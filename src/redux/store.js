/* External dependencies */
import { configureStore } from "@reduxjs/toolkit";

/* Local dependencies */
import coursesReducer from "../components/courses/redux/courses-slice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

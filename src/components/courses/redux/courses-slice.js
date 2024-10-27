import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseEndpoint } from "../../client/constants";

export const listCourses = createAsyncThunk("courses", async (args) => {
  const { data } = await axios(`${baseEndpoint}/courses`);

  if (args?.filterValue && args?.filterValue !== "all") {
    const courses = data.filter((item) => {
      if (item.tags.includes(args.filterValue)) {
        return true;
      }

      return false;
    });

    return courses;
  }

  return data;
});

const initialState = {
  courses: [],
  loading: false,
  error: null,
  searchString: "",
  filterByTag: "",
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(listCourses.pending, (state, action) => {
      state.loading = true;
      state.courses = [];

      if (action?.meta?.arg?.filterValue) {
        state.filterByTag = action.meta.arg.filterValue;
      }
    });

    builder.addCase(listCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.loading = false;
    });

    builder.addCase(listCourses.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export default courseSlice.reducer;

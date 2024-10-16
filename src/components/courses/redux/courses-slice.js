import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const listCourses = createAsyncThunk("courses", async (args) => {
  console.log(args);

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const course = [
        {
          title: "Html",
          description: "Fun way of learning HTML",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thu…ordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
          time: "33 hours",
          rating: "3.5",
        },
        {
          title: "Marketing",
          description: "Sell your products to everyone",
          image:
            "https://www.intandemcommunications.co.uk/wp-content/uploads/2019/08/What-is-marketing-500x333.jpg",
          time: "10 hours",
          rating: "5",
        },
        {
          title: "Nodejs",
          description: "Become full-stack developer in a month",
          image:
            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*TY9uBBO9leUbRtlXmQBiug.png",
          time: "100 hours",
          rating: "4.5",
        },
      ];

      resolve(course);
    }, 2000);
  });

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

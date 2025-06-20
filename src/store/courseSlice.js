import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
  },
  reducers: {
    addInitialCourses: (state, action) => {
      state.list = action.payload;
    },
    addNewCourse: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const courseActions = courseSlice.actions;
export default courseSlice;

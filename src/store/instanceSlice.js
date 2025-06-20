import { createSlice } from "@reduxjs/toolkit";

const instanceSlice = createSlice({
  name: "instances",
  initialState: {
    list: [],
  },
  reducers: {
    addInitialInstance: (state, action) => {
      state.list = action.payload;
    },
    addNewInstance: (state, action) => {
      const newInstance = action.payload;

      // Key format: "YEAR SEM"
      const key = `${newInstance.year} ${newInstance.semester}`;
      const courseId = newInstance.courseId;

      if (state.list[key]) {
        // Check for existing courseId in the same semester group
        const alreadyExists = state.list[key].some(
          (course) => course.courseId === courseId
        );

        if (!alreadyExists) {
          state.list[key].push({
            courseId: newInstance.courseId,
            title: newInstance.title,
            description: newInstance.description,
            prerequisites: newInstance.prerequisites,
          });
        }
      } else {
        // New semester group
        state.list[key] = [
          {
            courseId: newInstance.courseId,
            title: newInstance.title,
            description: newInstance.description,
            prerequisites: newInstance.prerequisites,
          },
        ];
      }
    },
  },
});

export const instancesActions = instanceSlice.actions;
export default instanceSlice;

import {configureStore} from '@reduxjs/toolkit'
import courseSlice from './courseSlice';
import instanceSlice from './instanceSlice';

const courseStore = configureStore({
  reducer:{
    courses:courseSlice.reducer,
    instances:instanceSlice.reducer,

  }
})

export default courseStore;
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import AssignmentsReducer from "../Courses/Assignments/AssignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    AssignmentsReducer
  }
});


export default store;
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
    title: string;
    description: string;
    points: string;
    dueDate: string;
    _id: string,
    availableFromDate: string;
    availableUntilDate: string;
  }
  

const initialState = {
    assignments: assignments,


    assignment: { 
      title: "New Name", 
      description: "New Description", 
      points: "100", 
      _id: "",
      dueDate: new Date().toString(), 
      availableFromDate: new Date().toString(), 
      availableUntilDate: new Date().toString() 
    },
    previousState: null as Assignment | null, // Initialize previousState as null
  };
  
  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
        ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== action.payload
          );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            state.previousState = state.assignment;
            return action.payload;
          } else {
            state.previousState = state.assignment;
            return assignment;
          }
        });
      },
      setInitial: (state, action) => {
        state.assignment = initialState.assignment
      },
      
      cancelAssignmentUpdate: (state, action) => {
        state.assignment = state.previousState!;
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  

export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, cancelAssignmentUpdate, setInitial } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;


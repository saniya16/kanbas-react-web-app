import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
    name: string;
    description: string;
    points: string;
    dueDate: string;
    availableFromDate: string;
    availableUntilDate: string;
  }
  

const initialState = {
    assignments: assignments,
    assignment: { 
      name: "New Name", 
      description: "New Description", 
      points: "0", 
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
      cancelAssignmentUpdate: (state, action) => {
        // Revert assignment to previousState
        state.assignment = state.previousState!;
      },
      setAssignment: (state, action) => {
        // Update previousState before updating assignment
        state.assignment = action.payload;
      },
    },
  });
  

export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, cancelAssignmentUpdate } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;


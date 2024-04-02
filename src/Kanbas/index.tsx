import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {Link} from "react-router-dom"
import Nav from "../Nav";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [course, setCourses] = useState<any[]>([]);
  const [defaultCourse, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../images/reactjs.jpg", description:""
  });

  const COURSES_API =`${API_BASE}/api/courses`;

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, defaultCourse);
    setCourses([ ...course, response.data ]);
  };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(course.filter((defaultCourse) => defaultCourse._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${defaultCourse._id}`,
        defaultCourse);
    setCourses(
      course.map((c) => {
        if (c._id === defaultCourse._id) {
          return defaultCourse;
        }
        return c;
      })
    );
  };



  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation/>
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard 
              courses={course}
              defaultCourse={defaultCourse}
              setCourse={setCourse}
              addNewCourse={addNewCourse} 
              deleteCourse={deleteCourse}
              updateCourse={updateCourse }           //deleteCourse={deleteCourse}
           //updateCourse={updateCourse}
           />} />
          
        <Route
              path="Courses/:courseId/*"
              element={<Courses />}
            />{" "}
          </Routes>
      </div>
    </div>
    </Provider>
);}
export default Kanbas;


  
  


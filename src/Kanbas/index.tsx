import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {Link} from "react-router-dom"
import Nav from "../Nav";
import { courses } from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";




function Kanbas() {
  const [course, setCourses] = useState(courses);
  const [defaultCourse, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../images/reactjs.jpg", description:""
  });

  const addNewCourse = () => {
    const newCourse = { ...defaultCourse,
                        _id: new Date().getTime().toString() };
    setCourses([...course, { ...defaultCourse, ...newCourse }]);

  };

  const deleteCourse = (courseId: string) => {
    setCourses(course.filter((c) => c._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      course.map((c) => {
        if (c._id === defaultCourse._id) {
          return defaultCourse;
        } else {
          return c;
        }
      })
    );
  };



  

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
           updateCourse={updateCourse}/>} />
          
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />
        </Routes>
      </div>
    </div>
    </Provider>
);}
export default Kanbas;


  
  


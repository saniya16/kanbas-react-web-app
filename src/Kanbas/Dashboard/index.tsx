import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import "./index.css";
import { Button } from "react-bootstrap";

function Dashboard({ courses, defaultCourse, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; defaultCourse: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {

    // { defaultCourse, course, setCourse, addNewCourse,
    //     deleteCourse, updateCourse }: {
    //     courses: any[]; course: any; setCourse: (course: any) => void;
    //     addNewCourse: () => void; deleteCourse: (course: any) => void;
    //     updateCourse: () => void; })
    
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h5>Course</h5>
            <input value={defaultCourse.name} className="form-control"
             onChange={(e) => setCourse({ ...defaultCourse, name: e.target.value }) } />
      <input value={defaultCourse.number} className="form-control"
             onChange={(e) => setCourse({ ...defaultCourse, number: e.target.value }) } />
      <input value={defaultCourse.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...defaultCourse, startDate: e.target.value }) }/>
      <input value={defaultCourse.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...defaultCourse, endDate: e.target.value }) } />
             <br/>
            <Button variant="danger btn-sm me-1" onClick={addNewCourse} >
            Add
            </Button>
            <Button variant="primary btn-sm me-1" onClick={updateCourse} >
        Update
      </Button>

            <br/>

            <h2>Published Courses ({courses.length})</h2> <hr />
            <div className="row">
                <div className="row row-cols row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold", whiteSpace: "nowrap" }}>
                                    <Link className="card-title" to={`/Kanbas/Courses/${course.id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold", whiteSpace: "nowrap" }}>
                                        {course.name} </Link>
                                        <br/>
                                        
                                    <p className="card-text" style={{ color: "gray", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{course.description}</p>
                                    <button className="btn btn-sm me-1" onClick={(event) => {
                                        event.preventDefault();
                                        if (course !== null && course.startDate && course.endDate !== "") {
                                            course.startDate = new Date(course.startDate).toISOString().split("T")[0];
                                            course.endDate = new Date(course.endDate).toISOString().split("T")[0];
                                          }
                                        setCourse(course);
                                    }}>
                                        <FaPencilAlt aria-hidden="true" style={{color: "gray", height: "30px"}} /> {}

                                    </button>

                                    <button className="btn btn-sm me-1" onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                        <FaTrash aria-hidden="true" style={{color: "red", height: "30px"}}/> {}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
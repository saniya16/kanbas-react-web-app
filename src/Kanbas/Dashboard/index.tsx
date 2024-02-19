import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaPencilAlt } from "react-icons/fa";
import "./index.css";

function Dashboard() {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (3)</h2> <hr />
            <div className="row">
                <div className="row row-cols row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold", whiteSpace: "nowrap" }}>
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold", whiteSpace: "nowrap" }}>
                                        {course.name} </Link>
                                    <p className="card-text" style={{ color: "gray", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{course.description}</p>
                                    <FaPencilAlt aria-hidden="true" className="wd-fg-color-gray" />
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
import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import {GiNotebook} from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (7)</h2> <hr />
      <div className="p-4">
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body" style={{ whiteSpace: "nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold", overflow:"hidden", textOverflow:"ellipsis" }}>
                    {course.number}.{course.name} </Link>
                  <p className="card-text" style={{overflow:"hidden", textOverflow:"ellipsis" }}>{course.number}.{course.name}.{course.term}</p>
                  <FaPencilAlt aria-hidden="true" className="wd-fg-color-gray" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
}
export default Dashboard;


import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import NavBar from "./TopNavBar";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaBars, FaChevronDown } from "react-icons/fa";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="mx-3 my-3">
      <div className="row">
        <NavBar />
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-auto">
          <CourseNavigation />
        </div>


        <div className="col">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Courses;


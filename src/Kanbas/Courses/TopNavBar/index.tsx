import { HiMiniBars3 } from "react-icons/hi2";
import { courses } from "../../../Kanbas/Database";

import { Link, useLocation, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import StudentViewButton from "../StudentView";

function Navbar() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [slash, kanbas, courses_, id, screen, assignment] = pathname.split("/");
    const course = courses.find((course) => course.id === courseId);
    return (

        <div className="row">
            <div>
                <div className="row">
                    <div className="col">
                        <div className="d-flex">
                            <Link to={"#"}><FaBars className="me-2" style={{ marginBottom: "3px", color: "#ff7070" }} /></Link>
                            <nav className="wd-flex-grow-1 wd-inline wd-nav-style" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item wd-top-bar">
                                        <Link to={`/Kanbas/Courses/${course?.id}/Home`}>{course?.number}</Link>
                                    </li>
                                    <li className="breadcrumb-item active wd-top-bar-text">
                                        <Link to={"#"}>{decodeURIComponent(screen)}</Link>
                                    </li>
                                    {assignment && <li className="breadcrumb-item active wd-top-bar-text">
                                        <Link to={"#"}>{decodeURIComponent(assignment)}</Link>
                                    </li>}
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col">
                        {(screen === "Home" || screen === "Modules") && <StudentViewButton />}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar
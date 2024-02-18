import { FaCaretLeft, FaCaretSquareDown, FaCaretSquareLeft, FaCaretSquareRight, FaCog } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="row">
        <div className="float-end me-5">
          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaCog />
            </a>
          </div>

          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaCaretSquareLeft className="me-1" />
              Export</a>
          </div>

          <div className="wd-button float-end">
            <a className="btn btn-secondary btn-sm" href="#" role="button">
              <FaCaretSquareRight className="me-1" />
              Import</a>
          </div>
        </div>

      </div>


      {/* <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>


          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody>
        </table>
      </div> */}
    </div>);
}
export default Grades;
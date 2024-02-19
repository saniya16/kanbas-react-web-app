import { FaCalendarCheck } from "react-icons/fa";
import { calendar } from "../../Database";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Calender() {
    const { courseId } = useParams();
    const task = calendar.filter(x => x.courseId === courseId);
    return (<>
        <div className="d-flex wd-coming">
            <h5><strong>Coming Soon</strong></h5>
            <a href=""
            ><i className="fa-regular fa-calendar-check calender-color"></i>
                View Calender</a>
        </div>
        <hr />
        <ul className="list-group wd-coming-up">
            {task.map((item) => (
                <li>
                    <Link to={"#"}><span className="wd-coming-up-color-red">
                        <FaCalendarCheck className="me-1" />
                        {item.title}</span>
                        <br /><span className="wd-fg-color-gray">{item.description} {item.dateTime}</span>
                    </Link>
                </li>
            ))}
        </ul></>
    );
}

export default Calender
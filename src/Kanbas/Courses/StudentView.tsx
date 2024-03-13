import { BiGlassesAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

function StudentViewButton() {
    return (
        <div className="col">
            <Link className="float-end" to="#">
                <button type="button" className="btn btn-secondary" data-toggle="button" aria-pressed="false">
                    <BiGlassesAlt className="me-1" />
                    Student View
                </button>
            </Link>
        </div>
    )
}
export default StudentViewButton
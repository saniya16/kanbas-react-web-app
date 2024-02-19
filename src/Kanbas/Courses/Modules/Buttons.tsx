import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ModuleButtons() {
    return (

        <div className="d-flex justify-content-end gap-1 ">

            <Link to={"#"} className="btn btn-secondary btn-sm wd-button">

                Collapse All</Link>

            <Link to={"#"} className="btn btn-secondary btn-sm wd-button" role="button">

                View Progress</Link>

            <div className="dropdown">
                <Link to={"#"} className="btn btn-secondary btn-sm dropdown-toggle wd-button" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                    <i className="fa fa-check-circle-o" style={{ color: "green" }}></i>
                    Publish All</Link>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link to={"#"} className="dropdown-item" >None</Link></li>
                </ul>
            </div>

            <Link to={"#"} className="btn btn-danger btn-sm" role="button">
                <FaPlus />
                Modules</Link>

            <Link to={"#"} className="btn btn-secondary btn-sm wd-button" role="button">
                <FaEllipsisV />

            </Link>
        </div>
    );
}

export default ModuleButtons
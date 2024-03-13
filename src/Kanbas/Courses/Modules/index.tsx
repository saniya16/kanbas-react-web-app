import { FaBan, FaBell, FaCalendarCheck, FaCaretRight, FaChartBar, FaCheckCircle, FaCrosshairs, FaEllipsisH, FaEllipsisV, FaFileImport, FaNewspaper, FaPlus } from "react-icons/fa";
import ModuleList from "./List";
import { calendar } from "../../Database";
import Calender from "../Home/Calendar";
import { Link } from "react-router-dom";
import ModuleButtons from "./Buttons";
function Modules() {
  return (
    <div>
      <ModuleButtons/>
      <hr />
      <ModuleList />  
    </div>
  );
}
export default Modules;


import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    
      const [module, setModules] = useState({
        id: 1, name:"NodeJS Modules",
        description: "Create a NodeJS server with ExpressJS",
        course:"CS 5610",
      });
      const MODULES_URL = "http://localhost:4000/a5/module"
  return (
    <div>
        
      <h3>Working With Objects</h3> 
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button className="btn btn-success me-2"onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-success"onClick={fetchAssignment} >
        Fetch Assignment
      </button>









      <h4>Modifying Properties</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary"href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary me-2" href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <br/>

      <h4>Modifying Modules</h4>
      <a className="btn btn-primary me-2" href={`${MODULES_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input type="text" 
        onChange={(e) => setModules({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <h4>Retrieving Modules</h4>
      <a className="btn btn-primary"href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <h4>Retrieving Module Properties</h4>
      <a className="btn btn-primary me-2" href="http://localhost:4000/a5/module/name">
        Get Name
      </a>

      <h4>Update Assignment Score</h4>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <a
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        className="btn btn-primary btn-sm ms-2"
      >
        Update Assignment Score
      </a>
      <h4>Update Assignment Completed</h4>
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: !assignment.completed })
        }
      />
      <a
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
        className="btn btn-primary btn-sm ms-2"
      >
        Update Assignment Completed
      </a>
      <h4>Update Module Description</h4>
      <input
        type="text"
        onChange={(e) => setModules({ ...module, description: e.target.value })}
        value={module.description}
      />
      <a
        href={`${MODULES_URL}/description/${module.description}`}
        className="btn btn-primary btn-sm ms-2"
      >
        Update Module Description
      </a>


    </div>
  );
}
export default WorkingWithObjects;


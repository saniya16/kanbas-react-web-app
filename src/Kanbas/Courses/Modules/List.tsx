import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import * as client from "./client";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId:string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  
  //const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <div className= "row">
        <div className= "col-auto">
        <input 
  value={module.name}
  onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
  style={{ borderRadius: '5px' }} // Adjust the border-radius value as needed
/>
        </div>
        <div className= "col-auto">
        <Button variant="success btn-sm me-1"
          onClick={handleAddModule}>
          Add
        </Button>

          <Button variant="primary btn-sm me-1" onClick={handleUpdateModule}>
                Update
        </Button>

        </div>
        </div>
        <div className= "row">
        <div className= "col-auto">
        <textarea 
  value={module.description}
  onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))
}
  style={{ borderRadius: '5px' }} // Adjust the border-radius value as needed
/>
        </div>
       
      </div>
      </li>

        {moduleList.filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
              <button className="btn m-0 pt-0 pb-0 me-1 btn-success btn-sm"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button className="btn m-0 pt-0 pb-0 me-1 btn-danger btn-sm"
               onClick={() =>  handleDeleteModule(module._id)}>
              Delete</button>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
             
           
            </div>
            {selectedModule?._id === module?._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}

              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
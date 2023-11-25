import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
 
  

  const handleAddModule = () => {
    createModule(courseId, module)
    .then((module) => {
      dispatch(addModule(module));
    })
    .catch((error) => {
      console.error("Error adding module:", error);
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  // Create a state to track the visibility of each module's content
  const [moduleVisibility, setModuleVisibility] = useState({});



  // Function to toggle the visibility of a module's content
  const toggleModuleVisibility = (moduleId) => {
    setModuleVisibility((prevVisibility) => ({
      ...prevVisibility,
      [moduleId]: !prevVisibility[moduleId],
    }));
  };

  return (
    <div>
      <ol class="breadcrumb">
        <li>
          <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>Collapse All</button>
        </li>
        <li>
          <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>View Progress</button>
        </li>
        <li class="dropdown">
          <button class="btn btn-secondary dropdown-toggle mr-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
            <i aria-hidden="true"></i>Publish All
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li>
          <button type="button" class="btn btn-danger mr-1" style={{ marginLeft: '5px' }}>
            <i aria-hidden="true"></i>Module
          </button>

          <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
            <BiDotsVerticalRounded className="wd-icon" />
          </button>
        </li>
      </ol><hr />



      <ul className="list-group">
        <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>

          <button
            class="btn btn-secondary mr-1" style={{ marginRight: '10px', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}
            onClick={handleAddModule}>
            Add
          </button>
          <button
            class="btn btn-secondary mr-1" style={{ marginRight: '10px', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } />
          <textarea
            style={{ marginLeft: '10px' }}
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } />

        </li>


        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index} className="list-group-item"
              style={{
                backgroundColor: '#f0f0f0',
                marginBottom: '40px',
              }}
            >

              <h3 onClick={() => toggleModuleVisibility(module._id)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >

                <span>
                  <BiDotsVerticalRounded className="wd-icon" />
                  {module.name}
                </span>
                <span>
                  <BiCheckCircle className="wd-icon" />
                  <BiDotsVerticalRounded className="wd-icon" />
                  <button
                    class="btn btn-danger mr-1"
                    onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: '5px' }}
                    class="btn btn-danger mr-1"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                </span>
              </h3>
              <p>{module.description}</p>
              {
                moduleVisibility[module._id] && module.lessons && (
                  <ul className="list-group">
                    {
                      module.lessons.map((lesson, index) => (
                        <li key={index} className="list-group-item">
                          <h4>{lesson.name}</h4>
                          <p>{lesson.description}</p>
                        </li>
                      ))
                    }
                  </ul>
                )
              }

            </li>
          ))
        }
      </ul>
    </div>
  );
}
export default ModuleList;
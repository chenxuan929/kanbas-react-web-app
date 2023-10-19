import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useState } from "react";
import { BiArrowBack, BiCheckCircle, BiDotsHorizontalRounded, BiDotsVertical, BiDotsVerticalRounded, BiExit, BiHelpCircle, BiMessageSquareDots, BiRectangle, BiUserCircle } from "react-icons/bi";



function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

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
        {
          modules
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
                    <BiDotsVerticalRounded className="wd-icon" />{module.name}
                  </span>
                  <span>
                    <BiCheckCircle className="wd-icon" />
                    <BiDotsVerticalRounded className="wd-icon" />
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
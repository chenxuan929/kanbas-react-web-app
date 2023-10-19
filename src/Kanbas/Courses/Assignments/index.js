import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useState } from "react";
import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";


function Assignments() {

  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  // Create a state to track the visibility of each module's content
  const [assignmentVisibility, setAssignmentVisibility] = useState({});
  // Function to toggle the visibility of a module's content
  const toggleAssignmentVisibility = (courseId) => {
    setAssignmentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [courseId]: !prevVisibility[courseId],
    }));
  };

  return (
    <div>
      <ol class="breadcrumb">
        <li>
          <input
            className="form-control"
            type="text"
            placeholder="Search for Assignment"
            aria-label="Search for Assignment"
            style={{ width: '400px', marginRight: '200px' }}
          />
        </li>

        <li>
          <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>Group</button>
        </li>
        <li>
          <button type="button" class="btn btn-danger mr-1" style={{ marginLeft: '5px' }}>
            <i aria-hidden="true"></i>+ Assignment
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
            <BiDotsVerticalRounded className="wd-icon" />
          </button>
        </li>

      </ol>
      <hr />



      <div className="list-group">

        <h2> &nbsp;&nbsp;Assignments for course {courseId}</h2>
        {courseAssignments.map((assignment) => (
          <li
            key={assignment._id}
            className="list-group-item"
            style={{
              backgroundColor: "#f0f0f0",
              borderLeft: "3px solid green"
            }}
          >

            <h3
              style={{
                display: "flex",
                justifyContent: "space-between",

              }}
            >

              <span>
                <BiDotsVerticalRounded className="wd-icon" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="assignment-link"
                  style={{ textDecoration: 'none', color: 'grey' }}
                >
                  {assignment.title}
                </Link>
              </span>
              <span>
                <BiCheckCircle className="wd-icon" style={{ color: 'green' }}/>
                <BiDotsVerticalRounded className="wd-icon" />
              </span>
            </h3>
            <p style={{ marginLeft: '30px' }}>{assignment._id} {assignment.title} {assignment.course}</p>
          </li>
        ))}
      </div>







    </div>
  );
}
export default Assignments;

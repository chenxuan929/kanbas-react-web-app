import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./AssignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  /*
  const assignments = db.assignments;
  */

  const assignments = useSelector((state) => state.AssignmentsReducer.assignments);
  const assignment = useSelector((state) => state.AssignmentsReducer.assignment);
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);


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
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
            <button
              type="button"
              className="btn btn-danger mr-1"
              style={{ marginLeft: '5px' }}
            >
              <i aria-hidden="true"></i>+Assignment
            </button>
          </Link>
        </li>
        <li>
          <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px', marginRight: '5px' }}>Group</button>
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
                <BiCheckCircle className="wd-icon" style={{ color: 'green' }} />
                <BiDotsVerticalRounded className="wd-icon" />


                <button
                  class="btn btn-danger mr-1"
                  onClick={() => {
                    const confirmation = window.confirm("Are you sure you want to remove the assignment?");
                    if (confirmation) {
                      dispatch(deleteAssignment(assignment._id));
                    } else {
                    }
                  }}>
                  Delete
                </button>


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

import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./AssignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();

  const { courseId } = useParams();

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  const assignments = useSelector((state) => state.AssignmentsReducer.assignments);
  const assignment = useSelector((state) => state.AssignmentsReducer.assignment);
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
    



  return (
    <div style={{ width: '90%' }}>
      <h3 style={{ marginTop: '-74px', marginBottom: '30px', marginLeft: '300px', color: 'grey', fontWeight: '300' }}>&gt; {assignment.title}</h3>
      <div className="d-flex justify-content-end">
        <BiCheckCircle className="wd-icon" style={{ color: 'green', fontSize: '25px' }} />&nbsp;
        <span style={{ color: 'green', fontSize: '20px' }}>Published</span>
        <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
          <BiDotsVerticalRounded className="wd-icon" /></button>
      </div>


      <hr />
      <h6>Assignemnt Name</h6>
      <input
        value={assignment._id}
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, _id: e.target.value }))
        } /><br /><br />

      <h6>Assignemnt Desciption</h6>
      <textarea
        style={{ marginLeft: '5px', marginRight: '5px' }}
        value={assignment.title}
        onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))
        } /><br />

      <h6>Points</h6>
      <input value='100'
        className="form-control mb-2" />

      <h6>Assign</h6>
      <input value='100'
        className="form-control mb-2" />

      <div className="d-flex justify-content-end">
        <button onClick={handleSave} className="btn btn-success me-2" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
          Cancel
        </button>

        <button
          onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}
          type="button" class="btn btn-danger mr-1" style={{ marginLeft: '5px' }}>
          <i aria-hidden="true"></i>
          Save
        </button>

      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
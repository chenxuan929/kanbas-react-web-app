import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
  //const assignment_title = db.assignments.find((assignment) => assignment.title === assignment_title);

  const { courseId } = useParams();

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };



  return (
    <div style={{ width: '90%' }}>
      <h3 style={{marginTop:'-74px', marginBottom:'30px', marginLeft:'300px', color:'grey', fontWeight:'300'}}>&gt; {assignment.title}</h3>
      <div className="d-flex justify-content-end">
        <BiCheckCircle className="wd-icon" style={{ color: 'green', fontSize: '25px' }} />&nbsp;
        <span style={{ color: 'green', fontSize: '20px' }}>Published</span>
        <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
          <BiDotsVerticalRounded className="wd-icon" /></button>
      </div>

      <hr />
      <input value={assignment.title}
        className="form-control mb-2" />
      <hr />

      <div className="d-flex justify-content-end">
        <button onClick={handleSave} className="btn btn-success me-2" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
          Cancel
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger">
          Save
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
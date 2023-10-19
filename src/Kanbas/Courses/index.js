import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";

import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

import { useState } from "react";


function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);

  const { assignmentId } = useParams();


  // Add the state variable and the setState function to manage visibility
  const [isNavigationVisible, setNavigationVisibility] = useState(true);

  // Function to toggle navigation visibility
  const toggleNavigation = () => {
    setNavigationVisibility((prevVisibility) => !prevVisibility);
  };


  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>

        {/* Add a button to toggle navigation visibility */}
        <button onClick={toggleNavigation} style={{ background: 'none', border: 'none', color: 'red', fontSize: '40px', marginLeft: '15px', marginTop: '-10px' }}>
          {'\u2261'}
        </button>

        <h2 style={{ marginLeft: '40px', color: 'red', fontWeight: '300' }}>
          Courses {courseId}
          <span style={{ color: 'grey', marginLeft: '10px' }}>
            &gt;
          </span>
          <span style={{ color: 'grey', marginLeft: '10px' }}>
            {screen}
          </span>


        </h2>
      </div>

      {/* Conditionally render CourseNavigation based on isNavigationVisible */}
      {isNavigationVisible && <CourseNavigation />}


      <div>
        <div className="overflow-t-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px", top: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
            
          </Routes>
        </div>
      </div>
    </div>

  );


}

export default Courses;
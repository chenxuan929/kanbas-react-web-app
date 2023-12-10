import React from "react";
import { useParams, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";

import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

import { useState, useEffect } from "react";
import axios from "axios";
import { LiaBarsSolid } from "react-icons/lia";
import "./index.css";


function Courses() {
  const { courseId } = useParams();
  const URL = "https://kanbas-node-server-app-zvjs.onrender.com/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
   
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);




  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  // const course = db.courses.find((course) => course._id === courseId);

  const { assignmentId } = useParams();


  // Add the state variable and the setState function to manage visibility
   const [isNavigationVisible, setNavigationVisibility] = useState(true);
  // Function to toggle navigation visibility
   const toggleNavigation = () => {
    setNavigationVisibility((prevVisibility) => !prevVisibility);
   };


  return (
    <div className="d-flex row flex-fill">
      <div className="crumbbar d-lg-block d-none" style={{ color: "red" }}>
        <nav className="breadcrumb-bar" aria-label="breadcrumb">
          <div className="breadcrumb">
            <div className="breadcrumb-item" style={{ fontSize: "1.5em" }}>
              <LiaBarsSolid
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
              <Link to={`/${courseId}/Home`}>{course.name}</Link>
            </div>
            <div
              className="breadcrumb-item active"
              aria-current="page"
              style={{ fontSize: "1.5em" }}
            >
              {screen}
            </div>
          </div>
        </nav>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "150px",
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
    // </div>
  );
}
export default Courses;
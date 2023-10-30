
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import { React, useState } from "react";


function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses,
        {
            ...course,
            _id: new Date().getTime()
        }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };




    return (
        <div class="row" style={{ marginLeft: '20px' }}>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2><hr />

            <div>
                <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                <button onClick={addNewCourse} class="y-but-add" >
                    Add
                </button>
                <button onClick={updateCourse} class="y-but-add" >
                    Update
                </button>



            </div>

            <div className="list-group" class="row">
                {courses.map((course) => (
                    <div class="card card-custom" style={{ width: '270px', height: '270px' }}>
                        <div class="card-body" style={{ position: 'relative', top: '50%', color: 'grey' }}>
                            <Link
                                key={course._id}
                                to={`/Kanbas/Courses/${course._id}`}
                                style={{ textDecoration: 'none', fontWeight: 'bold' }}
                                className="list-group-item"
                            >

                                <button
                                    class="y-but"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>

                                <button
                                    class="y-but"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                                <br />

                                {course.name}

                            </Link>
                            <h5 class="card-title">{course.number}</h5>
                            <p>
                                from {course.startDate} to {course.endDate}
                            </p>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;


/*
import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}>
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
*/
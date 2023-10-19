import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div style={{ marginLeft: '20px' }}>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div class="row row-cols-1 row-cols-md-12 g-4">
                    {courses.map((course, index) => (
                        <div class="card card-custom" style={{width:'270px', height:'270px'}}> 
                            <div class="card-body" style={{ position: 'relative', top: '50%', color:'grey'}}>
                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course._id}`}
                                    style={{ textDecoration: 'none', fontWeight: 'bold' }}
                                >
                                    {course.name}
                                </Link>
                                <h5 class="card-title">{course.number}{course.startDate}</h5>

                                <p class="card-text">
                                    202410_1 Fall 2023 Semester Full Term
                                </p>
                            </div>
                        </div>
                    ))}
            </div>


        </div>
    );
}

export default Dashboard;
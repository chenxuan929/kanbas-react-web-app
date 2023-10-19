import db from "../../Database";
import { useParams } from "react-router-dom";
import { BiAlarm, BiCheckCircle, BiDotsVerticalRounded, BiExclude, BiExit, BiFilter, BiImport, BiLogoFirefox, BiReceipt, BiRedo, BiSolidCircle, BiSolidFileImport, BiSolidHandLeft } from "react-icons/bi";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (


    <div style={{ width: '90%' }}>
      <hr/>
      <div className="d-flex justify-content-end">
        <ol class="breadcrumb">
          <li>
            <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
              <BiExit />
              Import</button>
          </li>
          <li>
            <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
              <BiSolidFileImport />
              Export</button>
          </li>
          <li>
            <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginLeft: '5px' }}>
              <BiAlarm className="wd-icon" />
            </button>
          </li>
        </ol>
      </div>


      <div className="row">
        <div className="mb-3">
          <label for="studentSearch" className="form-label">Search Students</label>
          <input
            id="studentSearch"
            className="form-control"
            type="text"
            placeholder="Search Students"
            style={{ width: '400px' }}
          />
        </div>

        <div className="mb-3">
          <label for="assignmentSearch" className="form-label">Search Assignments</label>
          <input
            id="assignmentSearch"
            className="form-control"
            type="text"
            placeholder="Search Assignments"
            style={{ width: '400px' }}
          />
        </div>

      </div>
      <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey', marginBottom:'30px' }}>
        <BiFilter />
        Apply Filters</button>

   
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment.user}>
                  <td style={{color:'red'}}>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id}>
                        {grade?.grade || ""}
                      </td>
                      
                    );
                  })}
                </tr>

                
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;

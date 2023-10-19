import { BiChevronLeftCircle, BiFile, BiHome, BiNavigation, BiSolidObjectsVerticalBottom } from "react-icons/bi";
import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ModuleList />
        </div>
        <div className="col-4">
          <div style={{ marginLeft: '30px' }}>
            <div className="row">
             
              <div>
                <button type="button" class="btn btn-secondary mr-1" style={{ backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
                  Unpublish
                </button>
              </div>
            </div>
            <br />

            <div>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
                <BiFile/>Import Existing Content
              </button>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
              <BiFile/>Import from Commons
              </button>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
              <BiHome/>Choose Home Page
              </button>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
                <BiSolidObjectsVerticalBottom/>View Course Stream
              </button>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
                <BiNavigation/>New Announcement
              </button>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
              <BiNavigation/>New Analytics
              </button>
              <button type="button" class="btn btn-secondary mb-1" style={{ width: '250px', textAlign: 'left', backgroundColor: 'rgb(237, 235, 235)', color: 'grey' }}>
              <BiNavigation/>View Course Notifications
              </button>
            </div>
          </div>

          <div className="row" style ={{marginTop: "20px", marginLeft:'10px'}}>
            <h3>To do</h3><hr/>
          </div>



        </div>
      </div>
    </div>
  );
}
export default Home;
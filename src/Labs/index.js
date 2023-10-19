import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Kanbas from "../Kanbas";


function Labs() {
  const { pathname } = useLocation();

  return (
    <div className="container">

      <div className="nav nav-pills">
        <Link
          to="/Labs/a3"
          className={`nav-link ${pathname.includes('a3') ? "active" : ""
            }`}
        >
          Assignment 3
        </Link>

        <Link
          to="/Kanbas/Dashboard"
          className={`nav-link ${pathname.includes('Kanbas') ? "active" : ""
            }`}
        >
          Kanbas
        </Link>


      </div>
      <Routes>
        <Route path="/" element={<Navigate to="Kanbas" />} />
        <Route path="a3/*" element={<Assignment3 />} />


      </Routes>
      
    </div >
  );
}
export default Labs;
import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import Nav from "../Nav";


function Labs() {
  const { pathname } = useLocation();

    return (
      <div>
        <Nav />
        {/* <Link to="/hello">Hello</Link> |<Link to="/Labs/a3">A3</Link> |
        <Link to="/Kanbas">Kanbas</Link> */}
        <Assignment3 />
      </div>
    );
  }
  export default Labs;
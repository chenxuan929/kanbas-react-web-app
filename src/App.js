/*import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter, Link, Route, Routes} from "react-router-dom";


function App() {

   return (
      <HashRouter>
         <div>
            <h1>React Labs</h1>
            <Link to="/Hello">Hello World</Link><br />

            <Link to="/Labs">Labs</Link><br />

            <Link to="/Kanbas">Kanbas</Link><br />

            <Routes>
               
               <Route path="/Hello" element={<HelloWorld />} />
               <Route path="/Labs/*" element={<Labs />} />
               <Route path="/kanbas" element={<Kanbas />} />
            </Routes>
         </div>
      </HashRouter>
   );
}
export default App; */

import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Lectures" element={<StateManagement />} />
        </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
      </div>
    </HashRouter>
  );
}

export default App;
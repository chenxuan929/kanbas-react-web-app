import { setMessage } from "./helloReducer";
import { useSelector, useDispatch } from "react-redux";

function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello Redux</h1>
      <button onClick={()=> dispatch(setMessage("Hello Redux"))} >Set Message</button>
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;


/*
import { useState } from "react";

function HelloRedux() {
  const [message, setMessage] = useState("Hello World");
  return (
    <div>
      <h1>Hello Redux</h1>
      <button onClick={()=> setMessage("Hello Redux")} >Set Message</button>
        <h2>{message}</h2>
    </div>
  )
}
export default HelloRedux;
*/
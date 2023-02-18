import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTwoNumbers } from "../Redux/action";
import { StepPage } from "./StepPage";
import * as style from "../Style/styling.css";

export const Home = () => {
  const dispatch = useDispatch();
  const carrData = useSelector((state) => state.data.carryArray);
  const addData = useSelector((state) => state.data.addArray);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const handleAdd = () => {
    if ((a, b)) {
      const payload = {
        // es6 name of key value same no need to give key name
        a,
        b,
      };
      dispatch(postTwoNumbers(payload));
    }
  };

  return (
    <div className="container">
      <div className="topMostDiv">
        <div className="ineerStepTextDiv">
          <h1>Step Addition</h1>
        </div>
      </div>
      
      <div className="inputTakingDiv">
        <div className="labelDivOne">First Number:</div>
        <input
          type={"string"}
          value={a}
          onChange={(e) => {
            setA(e.target.value);
          }}
        />
      </div>
      <div className="inputTakingDiv">
        <div className="labelDivTwo">Second Number:</div>
        <input
          type={"string"}
          value={b}
          onChange={(e) => {
            setB(e.target.value);
          }}
        />
      </div>
      <div className="genrateButtonDiv" onClick={handleAdd}>
        <button onClick={handleAdd}>Genrate Steps</button>
      </div>
      {/* conditional rendering so that if there is no data it should not show any error and dont display the steps */}
      {carrData ? <StepPage /> : ""}
    </div>
  );
};

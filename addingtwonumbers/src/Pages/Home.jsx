import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTwoNumbers } from "../Redux/action";
import { StepPage } from "./StepPage";

export const Home = () => {
  const dispatch = useDispatch();
  const carrData = useSelector((state) => state.data.carryArray);
  const addData = useSelector((state) => state.data.addArray);
  const [a, setA] = useState();
  const [b, setB] = useState();
  console.log(a, b);
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
    <div>
      i am home
      <input
        type={"string"}
        value={a}
        onChange={(e) => {
          setA(e.target.value);
        }}
      />
      <input
        type={"string"}
        value={b}
        onChange={(e) => {
          setB(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Genrate Steps</button>
      {/* conditional rendering so that if there is no data it should not show any error and dont display the steps */}
      {carrData ? <StepPage /> : ""}
    </div>
  );
};

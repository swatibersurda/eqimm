import { useDispatch, useSelector } from "react-redux";
import * as style from "../Style/styling.css";
export const StepPage = () => {
  // extracting the data we got from api carryArray and addData.
  const carrData = useSelector((state) => state.data.carryArray);
  const addData = useSelector((state) => state.data.addArray);
  
  return (
    <div className="stepContainer">
      <div className="steps">
        <h3 className="yellowColor leftAlign">{"{"}</h3>
        {carrData &&
          addData.map((item, index) => {
            return (
              // here making index as key because not geting it from backend so index will became here key or unique key.
              <div key={index} className="innerStepsDiv">
                <div className="contentDiv">
                  <h3 className="blueColor">
                    {`"`}step{index + 1}
                    {`"`}
                  </h3>
                  <h3 className="yellowColor">{":"}</h3>
                  {/* <h3>{`{`}"carryString":{carrData[index]}{`,`}"sumString":{addData[index]}{`}`}</h3> */}
                  <h3 className="yellowColor">{`{`}"carryString":</h3>
                  <h3 className="orangeColor">
                    {/* for makeing quotes */}
                    {`"`}
                    {carrData[index]}
                    {`"`}
                    {`,`}
                  </h3>
                  <h3 className="yellowColor"> "sumString":</h3>
                  <h3 className="orangeColor">
                    {`"`}
                    {addData[index]}
                    {`"`}
                  </h3>
                  <h3 className="yellowColor">{` },`}</h3>
                </div>
              </div>
            );
          })}
        {/* for last curly braces */}
        <h3 className="yellowColor leftAlign">{"}"}</h3>
      </div>
    </div>
  );
};

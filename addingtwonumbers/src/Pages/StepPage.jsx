import { useDispatch, useSelector } from "react-redux";
import * as style from  "../Style/styling.css";
export const StepPage=()=>{
    // extracting the data we got from api carryArray and addData.
  const carrData = useSelector((state) => state.data.carryArray);
  const addData = useSelector((state) => state.data.addArray);
//   console.log(carrData, "reached",addData,"dd");
    return(
        <div className="stepContainer">
            <div className="steps">
            {carrData&&addData.map((item,index)=>{
              return  <div key={index} className="innerStepsDiv" >
                  {/* <p>step{index+1}</p>
                   */}
                   <div className="contentDiv">
                   <h3>step{index+1}:</h3>
                   <h3>{`{`}"carryString":{carrData[index]}{`,`}"sumString":{addData[index]}{`}`}</h3>
                   </div>
              </div>
            })}
            </div>
          
          
         
        </div>
    )
}
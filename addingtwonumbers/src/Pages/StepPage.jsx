import { useDispatch, useSelector } from "react-redux";
export const StepPage=()=>{
    // extracting the data we got from api carryArray and addData.
  const carrData = useSelector((state) => state.data.carryArray);
  const addData = useSelector((state) => state.data.addArray);
  console.log(carrData, "reached",addData,"dd");
    return(
        <div>
            {carrData&&carrData.map((item,index)=>{
              return  <div>
                  <h1>step{index}{carrData}{addData}</h1>
              </div>
            })}
          
         
        </div>
    )
}
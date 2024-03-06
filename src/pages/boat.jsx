import { useState } from "react";
import {Second} from "../component/second";

const Boat = () => {
  const [aman, setAman] = useState("aman");
  console.log(aman);
  const [count , setCount] = useState("jikki")
  console.log(count)

  return (
    <div>
        {aman}
       
        {/* <Second setAman ={setAman}/> */}
        <Second setAman = {setAman} setCount = {setCount}/>
        {count}
    </div>
  );
};
export default Boat;

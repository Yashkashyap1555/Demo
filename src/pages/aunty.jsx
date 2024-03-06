import { useState } from "react";
import Uncle from "../component/uncle";
import Auntybeta from "./auntybeta";

function Aunty (){
    const [home, setHome] = useState("kitchen")
    console.log(home)

    return(
        <div>
            {home}
            {/* <Uncle home ={home} setHome = {setHome}/> */}
            <Auntybeta home = {home} setHome = {setHome}/>
        </div>
    )
}
export default Aunty
import { useState } from "react"
import Son from "../pages/son"
import SecondParent from "./secondparent"
// import {Son} from "../pages/son"

const Parent = () => {
    const[data, setData] = useState("Mr. Yash ")
    console.log(data)

    return(
        <div>
            
            {/* <Son setData = {setData}/> */}
            <SecondParent setData = {setData} data = {data}/>
            {/* {data} */}
        </div>
    )
}
export default Parent
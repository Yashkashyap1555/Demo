import { useState } from "react"
import Uncle from "../component/uncle"
import Aunty from "./aunty"

const Auntybeta = (props) => {
    // console.log(props)
    const {home, setHome} = props
    // console.log(home, "78970")
    const [bat , setBat] = useState ("Rohan")
    console.log(bat)

    return(
        <div>
            {bat}
            <Uncle bat = {bat} setBat = {setBat} home = {home} setHome = {setHome}/>
           
        </div>
    )
}
export default Auntybeta
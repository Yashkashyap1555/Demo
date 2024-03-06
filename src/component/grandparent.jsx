import { useState } from "react"
import Daughter from "../pages/daughter"
import Father from "./father"

const Grandparent = () => {
    const [rupee, setRupee] = useState ("Mr. Anil")
    console.log(rupee)

    
    
    
    return(
        <div>
            {rupee}
            {/* <Daughter rupee = {rupee} setRupee = {setRupee}/> */}
            <Father rupee = {rupee} setRupee = {setRupee}/>
        </div>
    )
}
export default Grandparent
import { useState } from "react"
import Sonchachi from "../pages/sonchachi"
import Chachi from "../pages/chachi"

const Chacha = () => {
    const [data , setData] =  useState("monu")
    console.log(data)
    
    

    
    return(
        <div>
            {data}
            <Chachi data = {data} setData = {setData} />
        </div>
    )
}
export default Chacha
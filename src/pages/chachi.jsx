import { useState } from "react"
import Sonchachi from "./sonchachi"
import Chacha from "../component/chacha"

const Chachi = (props) => {
    console.log(props)
    const {data , setData} = props
    const [cool , setCool] = useState("abhishek")
    console.log(cool)




    return(
        <div>
            {cool}
            <Sonchachi cool ={cool} setCool ={setCool} setData ={setData} data ={data}/> 
           
        </div>
    )
}
export default Chachi
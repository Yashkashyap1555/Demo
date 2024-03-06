import Final from "../pages/final"

const { useState } = require("react")

const First= () =>{
    const [data, setData] = useState("Yash")
    console.log(data)
    
    
    
    return(
        <div>
        {data}
        <Final data ={data} setData ={setData}/>
        </div>
    )
}
export default First
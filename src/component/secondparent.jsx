import { useState } from "react"
import Son from "../pages/son"
// import { Son1 } from "../pages/son"

const SecondParent = (props) => {
    const {data, setData} = props
    const [book , setBook] = useState("Aman")
    console.log(book)



    return(
        <div>
            {/* {book} */}
            {/* <Son1 setBook = {setBook}/> */}
            <Son setBook = {setBook} book = {book} setData = {setData} data = {data}/>
            {/* {book} */}

            {/* <button onClick={()=>setBook("monu bhaiya")}>again Click</button> */}
        </div>
    )
}
export default SecondParent
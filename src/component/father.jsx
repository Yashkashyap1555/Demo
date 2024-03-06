import { useState } from "react"
import Daughter from "../pages/daughter"

const Father = (props) => {
    console.log(props)
    const {rupee, setRupee} = props
    const [coin , setCoin] = useState ("Aman")
    console.log(coin)
    
    
    
    return(
        <div>
            {coin}
            <Daughter coin = {coin} setCoin = {setCoin} rupee = {rupee} setRupee = {setRupee}/>
        </div>
    )
}
export default Father
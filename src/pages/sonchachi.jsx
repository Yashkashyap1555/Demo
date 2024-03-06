import Chachi from "./chachi"


const Sonchachi = (props) => {
    // console.log(props)
    const {data , setData } = props
    const {cool, setCool} = props
    console.log(props)
    const Spanther = () =>{
        setData("singh")
        setCool("Sharma")
    }


    return(
        <div>
            <button onClick={Spanther}>shoot</button>
          
        </div>
    )
}
export default Sonchachi
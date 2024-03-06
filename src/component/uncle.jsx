// import Aunty from "../pages/aunty"

const Uncle = (props) => {
    console.log(props)
    const {bat, setBat, home, setHome} = props

    const Energy = () => {
        setBat("Pal")
       setHome("Hero")
    }
    // const Watch = () => {
    //     setHome("Untensils")
    // }

    return(
        <div>
            <button onClick={Energy}>Hit</button>
            {/* <button onClick={Watch}>again Hit</button> */}
        </div>
    )

}
export default Uncle
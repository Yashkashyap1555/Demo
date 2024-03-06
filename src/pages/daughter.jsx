const Daughter = (props) => {
    console.log(props,"8790")
    const {rupee , setRupee, coin , setCoin} = props
    // console.log(setRupee,"21")
    const Boat = () => {
        setRupee("Prajapati")
        setCoin("Baretha")

    }    
    

    return(
        <div>
            <button onClick={Boat}>Hitt</button>
           
            
        </div>
    )
}
export default Daughter
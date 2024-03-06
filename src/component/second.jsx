export const Second = (props) =>{
    console.log(props)
    const a = props.aman
    const {aman, setAman} = props
    console.log(aman)
    console.log(setAman)
    const z = props.count
    // console.log(count)
    const {count, setCount} = props
    console.log(count)
    console.log(setCount)
    const wrape = () =>{
        setCount("singh")
    }
    const swipe = () =>{
        setAman("baretha")
    }
    
    return(
        <div>
            <button onClick={swipe}>boom guys</button>
            <div>
            <button onClick={wrape}>again hit</button>
            </div>
        </div>
        
    )
    
}

// export default Second
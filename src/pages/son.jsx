const Son = (props) => {
    console.log(props,"monu")
    const a = props.data
    const {data, setData, setBook , book} = props
    // console.log(data)
    // console.log(setData)
    // console.log(book)
    
    const bravy = () => {
        setData("Kashyap")
        setBook("Baretha")
    }
    // const {book , setBook} = props
    // console.log(book)
    // console.log(setBook)
    const Unbravy = () =>{
        setBook("Baretha")
    }

    return(
        <div>
            <div>
            <button onClick={bravy}>Click</button>
            <div>
            {data}

            </div>
        </div>
        <div>
            
            <button onClick={Unbravy}>hit</button>
            <div>
            {book}
                
            </div>
        </div>
        </div>
        
    )
}
// export const Son1 = (props) => {
//     console.log(props)
//     const b = props.book
//     const {book , setBook} = props
//     console.log(book)
//     console.log(setBook)
//     function Unbravy (){
//         setBook("Bhai")

//     }
//     return (
//         <div>
//             <button onClick={Unbravy}>again Click</button>
//         </div>
//     )
// }
export default Son
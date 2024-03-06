import Boat from "./boat";

const Final = (props) => {
    console.log(props)
    const a = props.data
    console.log(a)
    const { data, setData } = props;
    console.log(data);
    console.log(setData);
    // const {aman, setAman} = props
    // console.log(aman)
    // console.log(setAman)
  
    const change = () => {
    setData("kashyap");
  };
 
  return (
    <div>
      {/* <button onClick={swipe}>swipe</button> */} 
      <button onClick={change}>boom</button>
     <Boat/>

    </div>

  );
};
export default Final;

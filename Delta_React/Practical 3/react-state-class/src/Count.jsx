import {useState} from "react";
export default function Count(){
   let [count, setCount] = useState(0);
    function incCount(){
        setCount(count+1)
        console.log(count);
    }

    return(
        <>
        <h5>Count  = {count}</h5>
        <button onClick={incCount}>Increase count</button>
        </>
    )
}
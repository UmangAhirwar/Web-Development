import {useState} from "react";

export default function Count(){

    let[count, setCount] = useState(0);
    function incCount(){
       setCount((count)=>{
        return count + 1;
       })
    }
    return(
        <>
        <p>Count: {count}</p>
        <button onClick={incCount}>Increase count</button>
        </>
    )
}   
//Passing objects on useState

import { useState } from "react"
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0})

    let updateBlue = () =>{
        // moves.blue += 1;
        console.log(moves.blue);
        //Here if you type setMoves(moves) it will only change the object keys, not the whole object.
        //Due to which it will prevent re rendering. You have make a copy whenever you are changing.
        //That's why we have to make an copy of the object to be rerender whenever we try to change the key value pairs.
        //Spread operator(...{object_name}) will make an copy of object whenever...
        setMoves((prevMove)=>{
           return {...prevMove, blue: prevMove.blue + 1};
        });    
    }

    let updateYellow = () =>{
        setMoves((prevMove)=>{
            return {...prevMove, yellow: prevMove.yellow + 1};
        });
    }

    let updateGreen = () =>{
        setMoves((prevMove) =>{
            return {...prevMove, green: prevMove.green +1};
        })
    }

    let updateRed = () =>{
        setMoves((prevMove) =>{
            return {...prevMove, red: prevMove.red +1};
        })
    }
    return(
        <>
        <div>
        <h1>Game begins!</h1>
        <div className="Board">
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue", color: "black"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green", color: "black"}} onClick={updateGreen}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor: "red", color: "black"}} onClick={updateRed}>+1</button>
        </div>
        </div>
        </>
    )
}
function submit(){
    console.log("Submitted");
    event.preventDefault(); // to prevent the the console error
}
export default function Button(){
    return(<>
        <form action="">
            <input type="text" />
            <button onClick={submit}>Submit</button> // event handlick on click
        </form>
    </>)
}
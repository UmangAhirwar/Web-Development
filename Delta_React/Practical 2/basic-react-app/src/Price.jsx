export default function Price({oldPrice, newPrice}){
    let oldSyles = {
        textDecorationLine: "line-through"
    }
    let styles = {
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px"
    }
    return(
        <>
        <div style={styles}>
            <span style={oldSyles}>₹{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; 
            <span><b>₹{newPrice}</b></span>
        </div>
        </>
    )
}
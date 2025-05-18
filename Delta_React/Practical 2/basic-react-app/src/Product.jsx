import "./Product.css"
import Price from "./Price"
export default function Product({title, idx}){
    let oldPrice = ["12,000", "5,999", "3,000", "2,500"]
    let newPrice = ["8,999", "3,600", "1,500", "999"]
    let Description = [
        ["8000 dpi", "Effictient and Smoothy"],
         ["Efficeient writing", "Smart connectivity"],
          ["Durable", "High-tech"],
           ["5000 dpi", "Ultimate Smoothness"]];
    let styles = {
        marginBottom: "30px"
    }
    return(
        <>
        <div className="Product">
            <p><b>{title}</b></p>
            <p>{Description[idx][0]}</p>
            <p style={styles}>{Description[idx][1]}</p>   
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
            </div>
        </>
    )
}
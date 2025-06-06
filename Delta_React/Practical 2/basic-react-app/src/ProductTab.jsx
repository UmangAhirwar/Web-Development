import Product from "./Product"
export default function ProductTab({idx}){
    let styles = {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <>
        <div className="ProductTab" style={styles}>
        <Product title="Logitech MX Master" idx="0"></Product>
        <Product title="Apple Pencil (2nd Gen)" idx="1"></Product>
        <Product title="Zebronics Zeb-transformer" idx="2"></Product>
        <Product title="Petronics Toad 23" idx="3"></Product>
        </div>
        </>
    )
}
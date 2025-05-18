import Product from "./product"
function ProductTab(){
    
    return(
        <>
        <div>
                <Product title = "Phone" price = {10000}></Product>
                <Product title = "laptop" price = {20000}></Product>
                <Product title = "tv" price = {30000}></Product>
        </div>
        </>
    )
}
export default ProductTab
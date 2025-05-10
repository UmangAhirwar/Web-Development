import Product from "./product"
function ProductTab(){
    const title = "Mobile";
    const description = "A small device which can do anything you want"
    const price = 30000;
    const features = ["GPS ", "Phone calls ", " Payments"];
    return(
        <>
        <div>
                <Product title = {title} description = {description} features = {features}  price = {price}></Product>
        </div>
        </>
    )
}
export default ProductTab
import "./product.css"

function Product({title, price}) {
  let isDiscount  = price > 25000;
  let styles = {backgroundColor: isDiscount ? "red" : ""};
    console.log()
  return (
    <>
      <div className="Product" style={styles}>
        <h2>{title}</h2>
        <h3>price: {price}</h3>
        {isDiscount ? <p>Discount of 5%</p>:null}
      </div>
    </>
  );
}

export default Product
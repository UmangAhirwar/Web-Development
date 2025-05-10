import "./product.css"

function Product({title, description, features, price}) {
    console.log()
  return (
    <>
      <div className="Product">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{features}</h3>
        <h3>{price}</h3>
      </div>
    </>
  );
}

export default Product
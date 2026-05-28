import { Products } from "../constants/Products";
import { CartStore } from "../store/CartStore";

const ProductsList = () => {
  const addToCart = CartStore((state) => state.addToCart);

  return (
    <>
      <div>
        {Products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;

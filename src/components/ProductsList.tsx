import { Products } from "../constants/Products";
import { CartStore } from "../store/CartStore";

const ProductsList = () => {
  const addToCart = CartStore((state) => state.addToCart);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-12">
        <h2 className="products-title text-4xl font-black text-white">
          Featured Products
        </h2>

        <p className="mt-3 text-slate-400">
          Carefully selected products just for you.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Products.map((product) => (
          <div
            key={product.id}
            className="product-card group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-500/40"
          >
            <div className="overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-white">{product.name}</h3>

              <p className="mt-2 text-2xl font-black text-emerald-400">
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-emerald-400 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsList;

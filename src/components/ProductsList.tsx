import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

import { Products } from "../constants/Products";
import { useCartStore } from "../store/CartStore";
import type { Product } from "../Types/Product";

const ProductsList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);

    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

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
        {Products.map((product) => {
          const isAdded = addedId === product.id;

          return (
            <div
              key={product.id}
              className="product-card group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-500/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Added Badge */}
                <div
                  className={`absolute right-4 top-4 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-xl transition-all duration-300 ${
                    isAdded
                      ? "translate-y-0 opacity-100 bg-emerald-500 text-slate-950"
                      : "-translate-y-5 opacity-0"
                  }`}
                >
                  <Check size={16} />
                  Added
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>

                <p className="mt-2 text-2xl font-black text-emerald-400">
                  ${product.price.toFixed(2)}
                </p>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition duration-300 active:scale-95 ${
                    isAdded
                      ? "bg-emerald-400 text-slate-950"
                      : "bg-emerald-500 text-slate-950 hover:scale-[1.02] hover:bg-emerald-400"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;

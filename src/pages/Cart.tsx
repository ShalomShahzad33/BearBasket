import { Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "../store/CartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cartItems.reduce((acc, item) => acc + item.cartQty, 0);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.cartQty, 0)
    .toFixed(2);

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-emerald-500/10 p-4 text-emerald-400">
              <ShoppingBag size={32} />
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight">Your Cart</h1>

              <p className="mt-1 text-slate-400">
                Review your selected items before checkout.
              </p>
            </div>
          </div>

          {/* Clear Cart Button */}
          <button
            onClick={clearCart}
            disabled={cartItems.length === 0}
            className="flex items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400 transition duration-300 hover:scale-105 hover:bg-red-500/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Trash2 size={18} />
            Clear Cart
          </button>
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/60 px-8 py-24 text-center">
            <div className="rounded-full bg-slate-800 p-6">
              <ShoppingBag size={48} className="text-slate-500" />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Your cart is empty</h2>

            <p className="mt-2 max-w-md text-slate-400">
              Looks like you haven’t added anything yet. Start exploring
              products and fill your basket.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">
            {/* Cart Items */}
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-xl transition duration-300 hover:border-emerald-500/30 sm:flex-row sm:items-center"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-110 sm:w-28"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-sm text-slate-400">
                        Quantity:
                        <span className="ml-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
                          {item.cartQty}
                        </span>
                      </p>

                      <p className="mt-3 text-2xl font-black text-emerald-400">
                        ${(item.price * item.cartQty).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400 transition duration-300 hover:scale-105 hover:bg-red-500/20 active:scale-95"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-black">Order Summary</h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Total Items</span>

                  <span className="font-semibold text-white">{totalItems}</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>Shipping</span>

                  <span className="font-semibold text-emerald-400">Free</span>
                </div>

                <div className="h-px bg-slate-800" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total</span>

                  <span className="text-3xl font-black text-emerald-400">
                    ${totalPrice}
                  </span>
                </div>

                <button className="mt-6 w-full rounded-2xl bg-emerald-500 px-5 py-4 text-lg font-bold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-emerald-400 active:scale-95">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

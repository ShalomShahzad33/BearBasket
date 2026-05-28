import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-black tracking-tight text-white">
          Bear<span className="text-emerald-400">Basket</span>
        </h1>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:scale-105 hover:bg-emerald-500/20"
          >
            <ShoppingCart size={18} />
            View Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

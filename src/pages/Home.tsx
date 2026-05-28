import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Welcome to{" "}
          <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            BearBasket
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Your one-stop shop for premium baskets, accessories, and curated
          essentials.
        </p>
      </section>

      <ProductsList />
    </main>
  );
};

export default Home;

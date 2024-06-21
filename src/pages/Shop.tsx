import { useState, useMemo } from "react";

// import Header from "../components/Header";

function Product({ name, price, stocked }: { name: string; price: string; stocked: boolean }) {
  return (
    <>
      <p className={`${stocked ? "text-black" : "text-red-600"} border-solid border-1 border-black p-1`}>{name}</p>
      <p className="border-solid border-1 border-black p-1 text-right">{price}</p>
    </>
  );
}

type ProductItem = {
  price: string;
  stocked: boolean;
  name: string;
};

const ProductList = ({ category, products }: { category: string; products: ProductItem[] }) => {
  if (products.length === 0) return <></>;
  return (
    <div className="mb-4">
      <p className="font-bold text-xl text-center mb-2">{category}</p>
      <div className={`grid grid-cols-2 grid-rows-${products.length}`}>
        {products.map((item, idx) => {
          return <Product name={item.name} price={item.price} stocked={item.stocked} key={idx} />;
        })}
      </div>
    </div>
  );
};

function Shop() {
  const shop = useMemo(
    () => [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ],
    []
  );
  const [search, setSearch] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  return (
    <>
      {/* <Header /> */}
      <main className="p-4 text-black">
        <section className="flex flex-col">
          <div className="mb-2">
            <label htmlFor="search" className="hidden">
              Search
            </label>
            <input
              className="p-1 bg-white"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <input
              className="mr-2"
              type="checkbox"
              name="available"
              id="available"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
            />
            <label htmlFor="available">Only show products in stock</label>
          </div>
        </section>
        <section>
          <div className="flex">
            <p className="flex-1 text-center font-bold text-xl">Name</p>
            <p className="flex-1 text-center font-bold text-xl">Price</p>
          </div>
          <ProductList
            category="Fruits"
            products={shop
              .filter((item) => {
                return item.category === "Fruits";
              })
              .filter((item) => {
                if (!availableOnly) return true;
                return item.stocked;
              })
              .filter((item) => {
                if (!search) return true;
                return item.name.includes(search);
              })}
          />
          <ProductList
            category="Vegetables"
            products={shop
              .filter((item) => item.category === "Vegetables")
              .filter((item) => {
                if (!availableOnly) return true;
                return item.stocked;
              })
              .filter((item) => {
                if (!search) return true;
                return item.name.includes(search);
              })}
          />
        </section>
      </main>
    </>
  );
}

export default Shop;

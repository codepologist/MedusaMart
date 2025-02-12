import Product from "./Product/Product";

const products = [
  { id: 1, name: "Apples", description: "Apple", price: 100 },
  { id: 2, name: "Oranges", description: "Oranges", price: 200 },
  { id: 3, name: "Mangoes", description: "Mangoes", price: 500 },
];

const Products = () => {
  return (
    <main className="section">
      <div className="container justify-content-center">
        <div className="columns">
          {products.map((product) => (
            <div key={product.id} className="column">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;

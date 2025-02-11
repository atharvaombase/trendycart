import { useSelector } from "react-redux";
import Product from "../components/Product";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item) => (
            <Product item={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

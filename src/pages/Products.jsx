import { useSelector } from "react-redux";
import Product from "../components/Product";
import Skeleton from "../components/Skeleton";

const Products = () => {
  const products = useSelector((store) => store.products);
  const { fetchDone, currentlyFetching } = useSelector(
    (store) => store.fetchStatus
  );
  console.log("Fetch", fetchDone, "currentlyFetching", currentlyFetching);

  return (
    <section className="text-gray-600 body-font scale-0.5">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {currentlyFetching ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            products.map((item) => <Product item={item} key={item._id} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;

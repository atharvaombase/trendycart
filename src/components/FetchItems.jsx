import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { productsActions } from "../store/productsSlice";

const Fetchitem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    dispatch(fetchStatusActions.MarkFetchingStarted());

    fetch("http://localhost:8000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusActions.MarkFetchDone());
        dispatch(fetchStatusActions.MarkFetchingFinished());
        dispatch(productsActions.setProducts(data));
      });
  }, [fetchStatus]);

  return <></>;
};

export default Fetchitem;

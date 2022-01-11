import { useEffect } from "react";
import "./assets/styles/Main.scss";
import { useDispatch } from "react-redux";
import { GET_FILTERS_REQUESTED,GET_ITEMS_REQUESTED} from "./redux/actions/actions-saga";
import { useAppSelector } from "./hooks/custom-hooks";
import Header from "./components/Header/Header";
import { Grid } from "./components/Layout/Grid";
import { Column } from "./components/Layout/Column";
import Container from "./components/Layout/Container";
import Sorting from "./components/Sorting/Sorting";
import Brands from "./components/Brands/Brands";
import Tags from "./components/Tags/Tags";
import ProductList from "./components/Product/ProductList";
import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const loading = useAppSelector((state) => state.loading.loading);

  const getItems = () => {
    dispatch({ type: GET_ITEMS_REQUESTED, payload: "" });
  };

  const getFilters = () => {
    dispatch({ type: GET_FILTERS_REQUESTED });
  };

  useEffect(() => { getItems(); getFilters(); }, []);

  return (
    <div className="App">
      <Loader visible={loading} />
      <Header />
      <Container className="mt-4">
        <Grid>
          <Column className="xs-12 sm-12 md-3 ">
            <Sorting />
            <Brands />
            <Tags />
          </Column>
          <Column className="xs-12 sm-12 md-6">
            <ProductList />
          </Column>
          <Column className="xs-12 sm-12 md-3">
            <Basket />
          </Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

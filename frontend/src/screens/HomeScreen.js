import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const keywork = match.params.keyword;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keywork, pageNumber));
  }, [dispatch, keywork, pageNumber]);

  return (
    <>
      <Meta />
      {!keywork && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keywork ? keywork : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;

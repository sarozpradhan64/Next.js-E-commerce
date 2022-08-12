import {
  Container,
  Card,
  Col,
  Row,
  Button,
  Grid,
  Text,
} from "@nextui-org/react";
import { useState } from "react";
import Layout from "../components/layout";
import data from "../utils/data";
import Products from "../components/products";
export default function App({ products, categories }) {
  console.log(products);
  return (
    <>
      <Layout>
        <Text h3>Latest Products</Text>
        <Grid.Container gap={2}>
          <Products products={products} categories={categories} />
        </Grid.Container>

        <Text h3>Exclusive Products</Text>
        <Grid.Container gap={2}>
        <Products products={products.filter((product)=> product.marked_price > 1000)} categories={categories} />
          </Grid.Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  var getProducts = await fetch(`${data.apiHost}/api/products`);
  const products = await getProducts.json();

  const getCategories = await fetch(`${data.apiHost}/api/category`);
  const categories = await getCategories.json();

  const getCarousel = await fetch(`${data.apiHost}/api/carousel`);
  const carousels = await getCarousel.json();
  return {
    props: {
      products,
      categories,
      carousels,
    },
    revalidate: 5,
  };
}

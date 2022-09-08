import { Grid, Text } from "@nextui-org/react";
import Layout from "../../components/layout";
import Products from "../../components/products";
import data from "../../utils/data";

export default function categoryProducts({ products, categories, category_slug }) {
  console.log(products);
  return (
    <>
      <Layout categories={categories}>
        <Text h3>{category_slug}</Text>
        <Grid.Container gap={2}>
          <Products products={products} categories={categories} />
        </Grid.Container>
        {/*   
          <Text h3>Exclusive Products</Text>
          <Grid.Container gap={2}>
          <Products products={products.filter((product)=> product.marked_price > 1000)} categories={categories} />
            </Grid.Container> */}
      </Layout>
    </>
  );
}
export async function getStaticPaths() {
  const getCategories = await fetch(`${data.apiHost}/api/category`);
  const categories = await getCategories.json();

  //get the paths that we want to pre-render based on category
  const paths = categories.map((category) => ({
    params: { category_slug: category.slug },
  }));
  // fallback:false means other routes should be 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  var getProducts = await fetch(
    `${data.apiHost}/api/category/${params.category_slug}`
  );
  const products = await getProducts.json();

  // category
  const getCategory = await fetch(
    `${data.apiHost}/api/category/${params.category_slug}`
  );
  const category = await getCategory.json();

  const getCategories = await fetch(`${data.apiHost}/api/category`);
  const categories = await getCategories.json();

  // const getCarousel = await fetch(`${data.apiHost}/api/carousel`);
  // const carousels = await getCarousel.json();
  return {
    props: {
      products,
      categories,
      category_slug: params.category_slug
    },
    revalidate: 5,
  };
}

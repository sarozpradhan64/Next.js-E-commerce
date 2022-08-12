import { Button,Modal, useModal, Col, Grid, Row, Text } from "@nextui-org/react";
import React, {useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Products from '../../components/products';
import data from "../../utils/data";

export default function Product({ product, products, categories }) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(product);
  return (
    <Layout>
      <Button
        auto
        onClick={() => router.back()}
        css={{ borderRadius: "unset" }}
        size={"sm"}
        color="secondary"
      >
        Go Back
      </Button>
      <Text h2 css={{ mt: "1rem" }}>
        {product.title}
      </Text>
      <Grid.Container css={{ mt: "1rem" }} gap={2}>
        <Grid xs={6}>
          <Image
            src={product.thumbnail}
            height="100"
            width="300"
            alt={"Nanu stores-" + product.title}
          />
        </Grid>
        <Grid xs={6}>
          <Grid.Container>
            <Grid xs={12}>
              <Text h4>Price: Rs. {product.marked_price}</Text>
            </Grid>
            <Grid xs={12}>
              <Text b>
                Satus:{" "}
                <Button
                  auto
                  size={"xs"}
                  color={product.status == "AVAILABLE" ? "success" : "error"}
                  onClick={handler}
                  css={{ display: "inline" }}
                >
                  {product.status}
                </Button>
              </Text>
            </Grid>
            <Grid css={{m:'1rem 0'}}>
              <Button css={{borderRadius:'unset'}} color='secondary'
              onClick={handler}
              >Buy Now</Button>
            </Grid>
            <Grid xs={12} css={{ display: "flex", flexDirection: "column" }}>
              <Text h4> Description:</Text>
              <Text css={{ textAlign: "justify", width: "80%" }}>
                {product.description}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
      <Text h3 css={{mt:'1rem'}}>Recommended Products</Text>
      <Grid.Container gap={2}>
        <Products products={products.filter((item)=>item.category == product.category)} categories={categories}/>
      </Grid.Container>

      {/* modal  */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={18} color='error'>
            Error !!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text b>Please DM us in Social Media Platforms</Text>
          <Text color='error'>Note: Website is under construction !</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export async function getStaticPaths() {
  const getProducts = await fetch(`${data.apiHost}/api/products`);
  const products = await getProducts.json();

  //get the paths that we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { product_slug: product.slug },
  }));
  // fallback:false means other routes should be 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const getProduct = await fetch(`${data.apiHost}/api/product/${params.product_slug}`);
  const product = await getProduct.json();

  var getProducts = await fetch(`${data.apiHost}/api/products`);
  const products = await getProducts.json();

  const getCategories = await fetch(`${data.apiHost}/api/category`);
  const categories = await getCategories.json();
  // get product images with slug of product
  const getImages = await fetch(
    `${data.apiHost}/api/product/images/${params.product_slug}`
  );
  const images_data = await getImages.json();
  const images = images_data.data;
  return {
    props: { product, products, categories, images },
    revalidate: 5,
  };
}

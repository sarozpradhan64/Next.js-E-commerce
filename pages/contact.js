import { Grid, Button, Spacer, Textarea, Text, Input } from "@nextui-org/react";
import React from "react";
import HeaderTitle from "../components/headerTitle";
import Layout from "../components/layout";
import data from "../utils/data";
//test
export default function contact({categories}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout categories={categories}>
      <HeaderTitle title={"Send us your Message/Feedback"} backBtn={true} />
      <Grid.Container gap={2}>
        <Grid
          xs={12}
          sm={6}
          css={{ display: "flex", flexDirection: "column", pt: "2rem" }}
        >
       <form method="POST" name="contact-form" netlify  data-netlify="true" 
            >
            <input type="hidden" name="form-name" value="contact-form" />
              <input
                className="radius-default input"
                name="name" type={'text'} required
                placeholder="Your fullname"
              />
              <input
                className="radius-default input"
                name="email" type={'email'} required
                placeholder="Email"
              />
              <input
                className="radius-default input"
                name="phone" type={'tel'} 
                placeholder="Phone number"
              />
              <textarea
                className="radius-default input textarea"
                name="message" required
                placeholder="Write your Message"
              ></textarea>
              <button
                type="submit"
                className="button-default button-big radius-button submit"
              >
                Send
              </button>
            </form>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {

  var getProducts = await fetch(`${data.apiHost}/api/products`);
  const products = await getProducts.json();

  const getCategories = await fetch(`${data.apiHost}/api/category`);
  const categories = await getCategories.json();
  return {
    props: {products, categories },
    revalidate: 5,
  };
}

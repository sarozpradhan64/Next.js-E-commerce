import { Grid, Button, Spacer, Textarea, Text, Input } from "@nextui-org/react";
import React from "react";
import HeaderTitle from "../components/headerTitle";
import Layout from "../components/layout";
import Slider from "react-slick";
//test
export default function contact() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <HeaderTitle title={"Send us your Message/Feedback"} backBtn={true} />
      <Grid.Container gap={2}>
        <Grid
          xs={12}
          sm={6}
          css={{ display: "flex", flexDirection: "column", pt: "2rem" }}
        >
          <form
            name="Nanu-Contact-Form"
            method="POST"
            netlify
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <Input
              clearable
              underlined
              css={{ width: "100%" }}
              labelPlaceholder="Full Name"
              name="name"
            />
            <Spacer y={2} />

            <Input
              clearable
              underlined
              css={{ width: "100%" }}
              labelPlaceholder="Email"
              type="email"
              name="email"
            />
            <Spacer y={2} />

            <Input
              clearable
              underlined
              css={{ width: "100%" }}
              labelPlaceholder="Phone"
              type={"number"}
              name="phone"
            />
            <Spacer y={2} />
            <Textarea
              css={{ width: "100%" }}
              name="message"
              underlined
              labelPlaceholder="Message"
            />
            <Spacer y={2} />
            <Button
              color={"secondary"}
              css={{ borderRadius: "unset" }}
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Grid>

        {/* <Grid xs={3} css={{ display: "flex", border: "2px solid red" }}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Slider {...settings}>
              <div style={{height:'80vh',border:'2px solid green'}}>
                <h3>1</h3>
              </div>
              <div style={{height:'80vh',border:'2px solid green'}}>
                <h3>2</h3>
              </div>
              <div style={{height:'80vh',border:'2px solid green'}}>
                <h3>3</h3>
              </div>
              <div style={{height:'80vh',border:'2px solid green'}}>
                <h3>4</h3>
              </div>
              <div style={{height:'80vh',border:'2px solid green'}}>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </Grid> */}
      </Grid.Container>
    </Layout>
  );
}

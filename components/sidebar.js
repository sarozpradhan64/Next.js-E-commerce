import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  Collapse,
  Spacer,
  Card,
  Col,
  Row,
  Button,
  Grid,
  Text,
} from "@nextui-org/react";
import Facebook from "../utils/icons/facebook";
import Instagram from "../utils/icons/instagram";
import Tiktok from "../utils/icons/tiktok";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const navMenuLinks = [
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
  ];

  const categoriesLinks = [
    { title: "Earrings", href: "/earrings" },
    { title: "Neck Piece", href: "/neckpiece" },
  ];

  return (
    <Col
      span={collapse ? 1 : 3}
      css={{
        display: "none",
        "@xs": {
          display: "block",
        },
        //   '@sm': {
        //     bg: '$yellow800',
        //     color: '$yellow100',
        //   },
        //   '@md': {
        //     bg: '$purple800',
        //     color: '$purple100',
        //   },
        //   '@lg': {
        //     bg: '$pink100'
        //   },
      }}
    >
      <Text
        h2
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          textAlign: "center",
        }}
        weight="bold"
      >
        Nanu Stores
      </Text>
      <Card
        css={{
          $$cardColor: "$colors$default",
          // border:'2px solid red',
          width: "100%",
          height: "100%",
        }}
      >
        <Button onClick={handleCollapse} auto color="error" icon={<h1>c</h1>} />
        <Card.Body>
          <Collapse.Group accordion={false}>
            <Collapse title={<Text h4>Menu</Text>} expanded>
              {navMenuLinks.map((link, index) => (
                <div key={index}>
                  <Link href={link.href} passHref style={{ width: "100%" }}>
                    <Button
                      auto
                      color="light"
                      rounded
                      ripple={false}
                      animated
                      flat
                      css={{ width: "100%" }}
                    >
                      {link.title}
                    </Button>
                  </Link>
                  <Spacer y={0.5} />
                </div>
              ))}
            </Collapse>
            <Collapse title={<Text h4>Categories</Text>}>
              {categoriesLinks.map((link, index) => (
                <div key={index}>
                  <Button
                    auto
                    color="light"
                    rounded
                    ripple={false}
                    animated
                    flat
                    css={{ width: "100%" }}
                  >
                    {link.title}
                  </Button>
                  <Spacer y={0.5} />
                </div>
              ))}
            </Collapse>
          </Collapse.Group>
          <Col css={{ mt: "2rem" }}>
            <Text h4 css={{ textAlign: "center" }}>
              Follow Us
            </Text>
            <Grid.Container gap={1} justify="center">
              <Grid>
                <a
                  href="https://www.facebook.com/stores.nanu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
              </Grid>
              <Grid>
                <a
                  href="https://www.instagram.com/nanu.stores/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </Grid>
              <Grid>
                <a
                  href="https://www.tiktok.com/@nanustores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Tiktok />
                </a>
              </Grid>
            </Grid.Container>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
}

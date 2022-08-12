import React from 'react'
import {
  Container,
  Card,
  Col,
  Row,
  Button,
  Grid,
  Text
} from "@nextui-org/react";
import Link from 'next/link';
import Image from 'next/image';
export default function Products({products, categories}) {
    const mapProducts = products.map((product, index) => (
        <Grid xs={6} sm={3} key={index}>
            <Link href={`/product/${product.slug}`} passHref>
          <Card isPressable>
            <Card.Body css={{ p: 0, position: "relative", height:'140px' }}>
              <Button
                css={{
                  position: "absolute",
                  zIndex: "1",
                  top: "5px",
                  right: "5px",
                }}
                auto
                rounded
                size={"xs"}
                color="warning"
              >
                {categories
                  .filter((category) => category.id==product.category)
                  .map((getcategory) => (
                    <span key={getcategory.id}>{getcategory.title}</span>
                  ))}
              </Button>
              <Image
                src={product.thumbnail}
                objectFit="cover"
                layout="fill"
                alt={product.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{product.title}</Text>
                <Text
                  css={{
                    color: "$accents7",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  Rs. {product.marked_price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          </Link>
        </Grid>
      ));
        return (
        <>
        {mapProducts}
        </>
  )
}

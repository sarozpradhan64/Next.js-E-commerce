import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Col,
  Row,
  Card,
  Dropdown,
  Text,
  Button,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Sidebar from "./sidebar";
import Ham from "../utils/icons/ham";

export default function Layout({ title, description, children, ogImage }) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const menuItems = [
    { key: 1, name: "Home", href: "/" },
    { key: 2, name: "Contact", href: "/contact" },
    // { key: "edit", name: "Edit File" },
  ];
  return (
    <>
      <Head>
        <title>
          {title
            ? `NANU | ${title}`
            : "Nanu Stores | Fashionable Jwelleries in Nepal: Neck Pieces, Earrings ..."}
        </title>
        <meta property="og:image" content={ogImage ? ogImage : "/logo.png"} />
        {description && <meta name="description" content={description} />}
      </Head>
      <main style={{ padding: "1rem 0" }}>
        <Row gap={1}>
          {/* sidebar */}
          <Sidebar />
          {/* sidebar end */}

          {/* main  */}
          <Col>
            <Col
              css={{
                p: 0,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                h3
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                  flex: "1",
                  display: "block",
                  "@xs": { display: "none" },
                }}
              >
                Nanu Stores
              </Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  size="sm"
                  css={{
                    m: "1rem",
                    "@xs": {
                      display: "none!important",
                    },
                    display: "flex",
                    borderRadius: "unset",
                  }}
                >
                  <Ham />
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
                  {(item) => (
                    <Dropdown.Item color={"default"}>
                      <Link key={item.key} href={item.href} passHref>
                        <Button light>{item.name}</Button>
                      </Link>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Switch
                size="xs"
                color="secondary"
                css={{ m: "1rem" }}
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
            </Col>
            {/* content */}
            {children}
          </Col>
          {/* main end */}
        </Row>
      </main>
    </>
  );
}

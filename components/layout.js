import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Col,
  Row,
  Card,
  Text,
  Button,
  Avatar,
  Spacer,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Sidebar from "./sidebar";

export default function Layout({ title, description, children }) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <Head>
        <title>{title ? `${title} | NANU` : 'NANU STORES | Fashionable Jwelleries in Nepal: Neck Pieces, Earrings ...'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
    <main style={{padding:'1rem 0'}}>
      <Row>
        {/* sidebar */}
        <Sidebar />
        {/* sidebar end */}
        {/* main  */}
        <Col>
          <Col css={{ paddingRight: "1rem" }}>
            <Switch  size="xs"
              color="secondary"
              css={{ float: "right" }}
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


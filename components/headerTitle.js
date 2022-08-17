import React from "react";
import { Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function HeaderTitle({ backBtn, title }) {
  const router = useRouter();
  return (
    <>
      {backBtn ? (
        <Button
          auto
          onClick={() => router.back()}
          css={{ borderRadius: "unset" }}
          size={"sm"}
          color="secondary"
        >
          Go Back
        </Button>
      ) : (
        ""
      )}
      <Text h2 css={{ mt: "1rem" }}>
        {title}
      </Text>
    </>
  );
}

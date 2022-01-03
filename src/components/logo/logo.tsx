import React from "react";
import CoffeeSmall from "../coffee/coffee-small";
import { Flex } from "@chakra-ui/react";
import "./logo.scss";

export default function Logo() {
  return (
    <Flex direction={"row"}>
      <CoffeeSmall />
      <span className={"brand-font"}>Foltz Concepts</span>
    </Flex>
  );
}

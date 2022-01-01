import React from "react";
import CoffeeSmall from "../coffee/coffee-small";
import { Flex } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Flex direction={"row"}>
      <CoffeeSmall />
      <span>Foltz Concepts</span>
    </Flex>
  );
}

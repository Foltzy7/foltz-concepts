import React from "react";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <div className={"landing-page"}>
      <Container width={"100%"}>
        <Flex direction={"row"} justify={"space-around"}>
          <Box p={4}>
            <Image
              src={process.env.PUBLIC_URL + "/selfie.jpg"}
              alt={"Zach Foltz"}
              maxH={"350px"}
            />
          </Box>
          <Box p={4}>
            <Flex direction={"column"} justify={"space-evenly"} h={"100%"}>
              <Box>
                <Text fontSize={"1em"}>Hero Identity:</Text>
                <Text fontSize={"1em"}>Husband & Father of 3</Text>
              </Box>
              <Box>
                <Text fontSize={"1em"}>Secret Identity:</Text>
                <Text fontSize={"1em"}>Programmer Extraordinaire</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}

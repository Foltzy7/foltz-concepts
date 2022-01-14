import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import CaptionCarousel from "../../components/carousel/carousel";

export default function AboutPage() {
  return (
    <Flex flexDirection={"column"} textAlign={"center"}>
      <Box p={4} backgroundColor={"floralwhite"}>
        <Heading color={"gray.900"}>
          Let me tell you more about myself.
        </Heading>
        <Container maxWidth={"100ch"}>
          <Box p={4}>
            <Text color={"gray.900"}>
              My professional programming career while still in college.
              I had an internship with my college of choice, the University of
              Northern Iowa, where I developed an Android app for help with
              speech aphasia therapy.
            </Text>
          </Box>
          <Box p={4}>
            <Text color={"gray.900"}>
              I interned with DISTek Integration, an off-highway, embedded engineering services company
              until graduation. I then took a full-time job with DISTek for
              the next 5 years working on automation and testing with John Deere.
            </Text>
          </Box>
          <Box p={4}>
            <Text color={"gray.900"}>
              I have been a web developer with Principal Financial Group since 2018. I work to modernize
              and maintain their Non-Qualified business' participant dashboard and enrollment center.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box p={4}>
        <Text color={"floralwhite"}>
          Here are some of the tools in my engineer's belt.
        </Text>
        <CaptionCarousel />
      </Box>
    </Flex>
  );
}

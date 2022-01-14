import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import CaptionCarousel from "../../components/carousel/carousel";

export default function AboutPage() {
  return (
    <Flex flexDirection={"column"} textAlign={"center"}>
      <Box p={4} backgroundColor={"gray.600"}>
        <Heading color={"floralwhite"}>
          Let me tell you more about myself.
        </Heading>
        <Container maxWidth={"100ch"}>
          <Box p={4}>
            <Text color={"floralwhite"}>
              My professional programming career while still in college.
              I had an internship with my college of choice, the University of
              Northern Iowa, where I developed an Android app for help with
              speech aphasia therapy.
            </Text>
          </Box>
          <Box p={4}>
            <Text color={"floralwhite"}>
              I interned with DISTek Integration, an off-highway, embedded engineering services company
              until graduation. I then took a full-time job with DISTek for
              the next 5 years working on automation and testing with John Deere.
            </Text>
          </Box>
          <Box p={4}>
            <Text color={"floralwhite"}>
              I have been a web developer with Principal Financial Group since 2018. I work to modernize
              and maintain their Non-Qualified business' participant dashboard and enrollment center.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box p={4}>
        <Heading p={2} color={"floralwhite"}>
          My engineer's tool belt.
        </Heading>
        <CaptionCarousel />
      </Box>
      <Box p={4} backgroundColor={"gray.600"}>
        <Heading color={"floralwhite"}>
          Hobbies & Interests
        </Heading>
        <Container maxWidth={"100ch"}>
          <Box p={4}>
            <Text color={"floralwhite"}>
              Indoor activities such as gaming, building computers, watching football, knife-making, and cooking.
            </Text>
          </Box>
          <Box p={4}>
            <Text color={"floralwhite"}>
              I enjoy outdoor and physical activities including golfing, disc golf, racquetball,
              lifting weights, snowboarding, camping, smoking BBQ, and riding motorcycles.
            </Text>
          </Box>
        </Container>
      </Box>
    </Flex>
  );
}

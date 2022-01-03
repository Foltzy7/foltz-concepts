import React from "react";
import "./App.scss";
import Nav from "./components/navigation";
import Footer from "./components/footer";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./pages/errors/error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <RecoilRoot>
          <div className="App">
            <Nav />
            <header className="App-header">
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
                    <Flex
                      direction={"column"}
                      justify={"space-evenly"}
                      h={"100%"}
                    >
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
            </header>
            <Footer />
          </div>
        </RecoilRoot>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

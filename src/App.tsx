import React from "react";
import "./App.scss";
import Nav from "./components/navigation";
import Footer from "./components/footer";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./pages/errors/error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <RecoilRoot>
          <div className="App">
            <Nav />
            <header className="App-header">
              <SimpleGrid columns={2} spacing={10}>
                <Box p={4}>
                  <Image
                    src={process.env.PUBLIC_URL + "/selfie.jpg"}
                    alt={"Zach Foltz"}
                  />
                </Box>
                <Box p={4} h={"100%"}>
                  <Flex
                    direction={"column"}
                    justify={"space-evenly"}
                    h={"100%"}
                  >
                    <Box>
                      <Text fontSize={"1.25em"}>
                        Hero Identity: Father of 3
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize={"1.25em"}>
                        Secret Identity: Software Engineer
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </SimpleGrid>
            </header>
            <Footer />
          </div>
        </RecoilRoot>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

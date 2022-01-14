import React from "react";
import "./App.scss";
import Nav from "./components/navigation";
import Footer from "./components/footer";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./pages/errors/error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page";
import AboutPage from "./pages/about/about-page";

function App() {
  return (
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <RecoilRoot>
          <div className="App">
            <Nav />
            {/*<header />*/}
            <div className={"content-background"}>
              <Routes>
                <Route path="/About" element={<AboutPage />} />
                <Route path="/" element={<LandingPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </RecoilRoot>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/LandingPage";
import Items from "./pages/Items";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer />
        </AppContainer>
      </>
    </Router>
  );
}

const AppContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
`;

export default App;

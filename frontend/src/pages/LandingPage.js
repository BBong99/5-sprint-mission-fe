import React from "react";
import styled from "styled-components";
import HeroBanner from "../components/RendinPageProduct/HeroBanner";
import FeatureList from "../components/RendinPageProduct/FeatureList";
import TestimonialSection from "../components/RendinPageProduct/TestimonialSection";

const LandingPage = () => {
  return (
    <PageContainer>
      <HeroBanner />
      <FeatureList />
      <TestimonialSection />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export default LandingPage;

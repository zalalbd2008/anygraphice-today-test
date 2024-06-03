import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";

import AboutCta from "@/components/containers/home-two/AboutCta";
import PortfolioText from "@/components/containers/home/PortfolioText";

const AboutUs = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner title="About Us" navigation="About Us" />

      <HomeTwoModal />

      {/* <PortfolioText /> */}
      {/* <Agency /> */}
      <TeamMembers />
      {/* <HomeTestimonial /> */}
      <AboutCta />
    </Layout>
  );
};

export default AboutUs;

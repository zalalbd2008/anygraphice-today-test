import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import Head from "next/head";


const ContactUs = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <Head>
        <meta title="Contact Now to Find Top Graphic Designers Near You | Any Graphics Today" />{' '}
        <meta
          name="description"
          content="Discover expert graphic designers in your area. Contact now for top-quality design services. Enhance your branding today!"
        />
      </Head>
      <CmnBanner title="Contact Us" navigation="Contact Us"  />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;

// UI/UX Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceWebsiteBlog } from '@/constant/inedex';
import webisteImage from 'public/images/portfolio/image_8.jpg';
import webisteMINIImage from 'public/images/service/miniweb.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
import { WebDesignImageChunk } from '@/constant/webDesign';

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Affordable WP, React JS, Next JS, Ecommerce Website Designs | Any
          Graphics Today
        </title>
        <meta
          name="description"
          content="Custom made website design within 5 days with yearlong free maintenance service. Start business branding within this week."
        />
      </Head>

      <ServiceDetailsBanner
        hedaer="Affordable WP, React Js, Next Js, E-commerce Website Designs | Any Graphics Today"
        breadcrumb="Website Designs"
      />
      <ServiceDetailsMain
        blogData={serviceWebsiteBlog}
        path={webisteImage}
        miniPath={webisteMINIImage}
        serviceName={WebDesignImageChunk}
      />
      <UxProcess stepWorkData={serviceWebsiteBlog} />
      <TeamMembers />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

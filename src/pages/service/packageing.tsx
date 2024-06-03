// Packaging Design

import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { servicePackageingBlog } from '@/constant/inedex';

import HeaderImage from 'public/images/service/package.jpg'; 
import HeaderMINIImage from 'public/images/service/minipackage.jpg'; 
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Attractive Design Service for Packaging | Any Graphics Today
        </title>
        <meta
          name="description"
          content="Highly skilled designer for all types of packaging design on same day. Elevate Your Brand with Expert Graphic Design Services"
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Attractive Design Service for Packaging  | Any Graphics Today"
        breadcrumb="Packaging Design"
      />
      <ServiceDetailsMain
        blogData={servicePackageingBlog}
        path={HeaderImage}
        miniPath={HeaderMINIImage}
      />
      <UxProcess stepWorkData={servicePackageingBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

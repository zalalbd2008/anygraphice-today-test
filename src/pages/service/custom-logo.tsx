// Custome Logo Design

import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceCustomeLogoBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/logo.jpg';
import HeaderMINIImage from 'public/images/service/minilogo.jpg';
import Head from 'next/head';
import { LogoImageChunk } from '@/constant/serviceImagePath';

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Custom Made Logo at No Upfront Charge | Any Graphics Today
        </title>
        <meta
          name="description"
          content="Custom-Made High-Resolution Logo on Same day. Multiple options and Revisions. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer=" Custom Made Logo at No Upfront Charge | Any Graphics Today"
        breadcrumb="Custom Logo Design"
      />
      <ServiceDetailsMain
        blogData={serviceCustomeLogoBlog}
        path={HeaderImage}
        miniPath={HeaderMINIImage}
        serviceName={LogoImageChunk}
      />
      <UxProcess stepWorkData={serviceCustomeLogoBlog} />

      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

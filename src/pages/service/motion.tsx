// Motion Graphics

import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceMotiononBlog } from '@/constant/inedex'
import motionImage from 'public/images/portfolio/image_10.jpg';
import motionMINIImage from 'public/images/service/minimotion.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>Highly Skilled Motion Graphic Design | Any Graphics Today</title>
        <meta
          name="description"
          content="Expert graphic design services for Motion Graphics. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Highly Skilled Motion Graphic Design | Any Graphics Today"
        breadcrumb="Motion Graphic Design "
      />
      <ServiceDetailsMain
        blogData={serviceMotiononBlog}
        path={motionImage}
        miniPath={motionMINIImage}
      />
      <UxProcess stepWorkData={serviceMotiononBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

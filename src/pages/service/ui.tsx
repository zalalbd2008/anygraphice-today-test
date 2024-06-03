// UI/UX Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceUiBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/ui.jpg';
import MiniUIImage from 'public/images/service/miniui.jpg';

import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';
const ServiceDetails = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>Graphic Designer for UI/UX Designs | Any Graphics Today</title>
        <meta
          name="description"
          content="UI/UX Designs from high skilled designers at No Upfront Charge. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Graphic Designer for UI/UX Designs | Any Graphics Today"
        breadcrumb="UI/UX Designs"
      />
      <ServiceDetailsMain
        blogData={serviceUiBlog}
        path={HeaderImage}
        miniPath={MiniUIImage}
      />
      <UxProcess stepWorkData={serviceUiBlog} />
      <TeamMembers />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

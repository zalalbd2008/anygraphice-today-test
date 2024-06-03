import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import { serviceArtBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/art.png';
import MiniHeaderImage from 'public/images/service/artmini.jpg';
import TeamMembers from '@/components/containers/TeamMembers';

const ServiceDetails = () => {
  // const imageChunk = [];


  return (
    <Layout header={1} footer={1} video={0}>
   
      <ServiceDetailsBanner
        hedaer="Illustration and Art | Any Graphics Today"
        breadcrumb="Illustration and Art"
      />
      <ServiceDetailsMain
        blogData={serviceArtBlog}
        path={HeaderImage}
        miniPath={MiniHeaderImage}
      />
      <UxProcess stepWorkData={serviceArtBlog} />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

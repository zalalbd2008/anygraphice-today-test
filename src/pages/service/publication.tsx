// Publication Design
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';

// data source
import { servicePublicationBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/publication.jpg';
import HeaderMINIImage from 'public/images/service/miniservice.jpg';


import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';


import one from 'public/images/service/pubOne.jpg';
import two from 'public/images/service/pubTwo.jpg';
import three from 'public/images/service/pubThree.jpg';
import four from 'public/images/service/pubFour.jpg';
import five from 'public/images/service/pubFive.jpg';
import six from 'public/images/service/pubSix.jpg';
import seven from 'public/images/service/pubSeven.jpg';
import eight  from 'public/images/service/pubEight.jpg';

const ServiceDetails = () => {
  const imageChunk = [one, two, three, four, five, six, seven, eight];
  
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Publication Design by Creative Designers | Any Graphics Today
        </title>
      </Head>
      <ServiceDetailsBanner
        hedaer="Publication Design by Creative Designers | Any Graphics Today"
        breadcrumb="Publication Design"
      />
      <ServiceDetailsMain
        blogData={servicePublicationBlog}
        path={HeaderImage}
        miniPath={HeaderMINIImage}
        serviceName={imageChunk}
      />
      <UxProcess stepWorkData={servicePublicationBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

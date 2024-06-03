import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';

// data source
import { serviceMarketingBlog } from '@/constant/inedex';
import HeaderImage from 'public/images/service/advertisment.jpg';
import MiniMarkettingImage from 'public/images/service/minimarketing.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';

// Image

import one from 'public/images/service/marOne.jpg';
import two from 'public/images/service/marTwo.jpg';
import three from 'public/images/service/marThree.jpg';
import four from 'public/images/service/marFour.jpg';
import five from 'public/images/service/marFive.jpg';
import six from 'public/images/service/marSix.jpg';
import seven from 'public/images/service/marSeven.jpg';
import eight from 'public/images/service/marEight.jpg';
import nine from 'public/images/service/marNine.jpg';
import ten from 'public/images/service/marTen.jpg';
import eleven from 'public/images/service/marEleven.jpg';

const ServiceDetails = () => {
  const imageChunk = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Graphic Design for Advertisement & Marketing | Any Graphics Today
        </title>
        <meta
          name="description"
          content="Get Advertisement & Marketing Designs at No Upfront Charge. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Advertisement & Marketing Design | Any Graphics Today"
        breadcrumb="Advertisement & Marketing Design"
      />
      <ServiceDetailsMain
        blogData={serviceMarketingBlog}
        path={HeaderImage}
        miniPath={MiniMarkettingImage}
        serviceName={imageChunk}
      />
      <UxProcess stepWorkData={serviceMarketingBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

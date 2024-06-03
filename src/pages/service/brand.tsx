import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import UxProcess from '@/components/containers/service-details/UxProcess';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import serviceBrandBlog from '@/constant/services/serice-brand';
import brandImage from 'public/images/portfolio/image_9.jpg';
import MiniBrandImage from 'public/images/service/brands.jpg';
import Head from 'next/head';
import TeamMembers from '@/components/containers/TeamMembers';


// Image



import one from 'public/images/service/brandOne.jpg';
import two from 'public/images/service/brandTwo.jpg';
import three from 'public/images/service/brandThree.jpg';
import four from 'public/images/service/brandfour.jpg';
import five from 'public/images/service/brandFive.jpg';
import six from 'public/images/service/brandSix.jpg';
import seven from 'public/images/service/brandSeven.jpg';
import eight from 'public/images/service/brandEight.jpg';
import nine from 'public/images/service/brandNine.jpg';
import ten  from 'public/images/service/brandTen.jpg';
import eleven from 'public/images/service/brandEleven.jpg';
import twelve from 'public/images/service/brandTwolve.jpg';


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
      twelve,
    ];
  return (
    <Layout header={2} footer={1} video={false}>
      <Head>
        <title>
          Graphic Design for Brand & Design Identity | Any Graphics Today
        </title>
        <meta
          name="title"
          content="Graphic Design for Brand & Design Identity | Any Graphics Today"
        />
        <meta
          name="description"
          content="Brand & Design Identity Graphics at No Upfront Charge. Get Custom Visuals Today. Elevate Your Brand with Expert Graphic Design Services."
        />
      </Head>
      <ServiceDetailsBanner
        hedaer="Graphic Design for Brand & Design Identity | Any Graphics Today"
        breadcrumb="Branding  Design "
      />
      <ServiceDetailsMain
        blogData={serviceBrandBlog}
        path={brandImage}
        miniPath={MiniBrandImage}
        serviceName={imageChunk}
      />
      <UxProcess stepWorkData={serviceBrandBlog} />
      {/* <TeamMembers /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;

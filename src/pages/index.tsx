import React from 'react';
import Layout from '@/components/layout/Layout';
import HomeOneBanner from '@/components/layout/banner/HomeOneBanner';
import Agency from '@/components/containers/home/Agency';
import PortfolioText from '@/components/containers/home/PortfolioText';
import HomeOffer from '@/components/containers/home/HomeOffer';
import HomeTestimonial from '@/components/containers/home/HomeTestimonial';
import HomeBlog from '@/components/containers/home/HomeBlog';
import HomeSponsor from '@/components/containers/home/HomeSponsor';
import NextPage from '@/components/containers/home/NextPage';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import Head from 'next/head';

const HomeDark = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <Head>
        <meta
          name="title"
          content="Top Local Designers for Custom Graphic Branding | Any Graphic Today"
        />

        <meta
          name="description"
          content="Elevate Your Brand with Top Local Graphic Designers at No Upfront Fee. 24/7 Exceptional Design Solutions Near You for Branding"
        />
      </Head>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeOffer />
      <HomeBlog />
      <CtaTwo />
    </Layout>
  );
};

export default HomeDark;

// UI/UX Design
// import React from 'react';
// import Layout from '@/components/layout/Layout';
// import Head from 'next/head';
// import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
// import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
// import UxProcess from '@/components/containers/service-details/UxProcess';
// import CtaTwo from '@/components/containers/service-details/CtaTwo';
// import { serviceUiBlog } from '@/constant/inedex';
// import HeaderImage from 'public/images/service/ui.jpg';
// import MiniUIImage from 'public/images/service/miniui.jpg';

// import Head from 'next/head';
// import TeamMembers from '@/components/containers/TeamMembers';
// const HomeDark = () => {
//   return (
//     <>
//       <Head>
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="google-site-verification"
//           content="EGzXF4NKX_smb9Rs_AjDjfc3oWbHLBXjGeY2aloiQNY"
//         />
//       </Head>
//       <h1
//         style={{
//           color: 'red',
//         }}
//       >
//         Just Testing
//       </h1>
//     </>
//     // <Layout header={2} footer={1} video={false}>

//     // </Layout>
//   );
// };

// export default HomeDark;

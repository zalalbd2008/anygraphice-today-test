import React from 'react';
import Layout from '@/components/layout/Layout';
import CmnBanner from '@/components/layout/banner/CmnBanner';
import PortfolioMain from '@/components/containers/PortfolioMain';
import TeamMembers from '@/components/containers/TeamMembers';
import PortfolioText from '@/components/containers/home/PortfolioText';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import TeamMembersTwo from '@/components/containers/TeamMembersTwo';
import { LogoImageChunk } from '@/constant/serviceImagePath';

const OurPortfolio = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner title="Portfolio " navigation="Portfolio " /> 
      <PortfolioMain />
     <PortfolioText show={false} />
      <TeamMembers /> 
      <TeamMembersTwo serviceName={LogoImageChunk} />
       <CtaTwo />
     
    </Layout>
  );
};

export default OurPortfolio;

import Layout from '@/components/layout/Layout';
import React from 'react';

const disclaimer = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <div className="section container">
        <h1 className="fs-1">Disclaimer for Any Graphics Today</h1>

        <div>
          <h2 className="py-3 fs-3">General Information</h2>
          <p className="fs-5">
            The information provided by{' '}
            <a
              className="text-decoration-underline"
              href="https://anygraphicstoday.com/"
            >
              Any Graphics Today
            </a>{' '}
            on
            <a href="https://anygraphicstoday.com">
              {' '}
              https://anygraphicstoday.com
            </a>{' '}
            and our mobile application is for general informational purposes
            only. All information on the Site and our mobile application is
            provided in good faith, however, we make no representation or
            warranty of any kind, express or implied, regarding the accuracy,
            adequacy, validity, reliability, availability, or completeness of
            any information on the Site or our mobile application.
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">External Links Disclaimer</h2>
          <p className="fs-5">
            The Site and our mobile application may contain (or you may be sent
            through the Site or our mobile application) links to other websites
            or content belonging to or originating from third parties or links
            to websites and features in banners or other advertising. Such
            external links are not investigated, monitored, or checked for
            accuracy, adequacy, validity, reliability, availability, or
            completeness by us. We do not warrant, endorse, guarantee, or assume
            responsibility for the accuracy or reliability of any information
            offered by third-party websites linked through the site or any
            website or feature linked in any banner or other advertising.
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">Professional Disclaimer</h2>
          <p className="fs-5">
            The Site cannot and does not contain graphic design advice. The
            graphic design information is provided for general informational and
            educational purposes only and is not a substitute for professional
            advice. Accordingly, before taking any actions based upon such
            information, we encourage you to consult with the appropriate
            professionals. We do not provide any kind of graphic design advice.
            The use or reliance on any information contained on this site or our
            mobile application is solely at your own risk.
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">Affiliate Disclaimer</h2>
          <p className="fs-5">
            This Site and our mobile application may contain links to affiliate
            websites, and we receive an affiliate commission for any purchases
            made by you on the affiliate website using such links. Our
            affiliates include [list any affiliate programs you're a part of].
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">Copyright Notice</h2>
          <p className="fs-5">
            Should you have any feedback, comments, requests for technical
            support, or other inquiries, please contact us by email
            <a href="https://anygraphicstoday.com">
              {' '}
              https://anygraphicstoday.com
            </a>
          </p>
        </div>

        <p className="py-4 text-light-emphasis fst-italic">
          This disclaimer was last updated on: 14-03-24
        </p>
      </div>
    </Layout>
  );
};

export default disclaimer;

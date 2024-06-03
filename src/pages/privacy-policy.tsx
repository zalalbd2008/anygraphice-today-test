import CtaTwo from '@/components/containers/service-details/CtaTwo';
import Layout from '@/components/layout/Layout';
import React from 'react';

const privacyPolicy = () => {
  let currentLocaleString = new Date().toLocaleString();
  return (
    <Layout header={2} footer={1} video={0}>
      <div className="section container">
        <h1 className="fs-1">Privacy Policy</h1>
        {/* <p className="fs-4 py-2">Effective Date: 14-03-24</p> */}
        <p className="py-2 fs-5">
          Welcome to{' '}
          <a
            className="text-decoration-underline"
            href="https://anygraphicstoday.com/"
          >
            Any Graphics Today
          </a>
          , a concern of Logo In Hours LLC. We are committed to protecting the
          privacy and security of our clients' information. This Privacy Policy
          explains how we collect, use, and safeguard your information when you
          visit our website{' '}
          <a href="https://anygraphicstoday.com">
            {' '}
            https://anygraphicstoday.com
          </a>
        </p>
        <div className="mt-3">
          <h2 className="py-3 fs-3">Information We Collect</h2>
          <p className="fs-5">
            We may collect personal information that you voluntarily provide to
            us when you use our services or contact us. The types of information
            we may collect include.
          </p>
          <div className="mt-4">
            <ul>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                <b>Contact Information:</b> Your name, email address, phone
                number, and any other contact details you provide.
              </li>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                <b>Project Details:</b> Information about your design needs,
                preferences, and any other details related to the graphic design
                services we provide.
              </li>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                <b>Payment Information:</b> We collect payment information when
                you approve a design and make a payment. Note that all payment
                processing is done by third-party service providers, and we do
                not store your credit card information.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="py-3 fs-3">How We Use Your Information</h2>
          <p className="fs-6">
            We use the information we collect for various purposes, including
          </p>
          <div>
            <ul>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                To provide and manage the graphic design services you request.
              </li>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                To communicate with you about your projects, including
                responding to your inquiries and fulfilling your requests.
              </li>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                To process your payments for our services.
              </li>
              <li
                style={{
                  listStyle: 'inside',
                }}
              >
                To improve our website and services by understanding how our
                clients use our services.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="py-3 fs-3">Sharing Your Information</h2>
          <p className="fs-5">
            We do not sell, rent, or otherwise share your personal information
            with third parties, except as necessary to provide the services you
            have requested or when legally required. This includes sharing
            information with third-party service providers who perform services
            on our behalf, such as payment processing
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">Data Security</h2>
          <p className="fs-5">
            We take reasonable measures to protect the security of your personal
            information from unauthorized access, use, or disclosure. However,
            no internet-based service can guarantee complete security. We
            encourage you to take steps to protect your personal information
            online, including choosing strong passwords and keeping your devices
            secure.
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">Your Rights</h2>
          <p className="fs-5">
            Depending on your location, you may have certain rights regarding
            your personal information, including the right to access, correct,
            or delete the information we hold about you. To exercise these
            rights, please contact us at the contact information provided below.
          </p>
        </div>
        <div>
          <h2 className="py-3 fs-3">Contact Us</h2>
          <p className="fs-5">
            If you have any questions or concerns about our use of your personal
            information, please contact us at
          </p>
          <a
            className="py-4 text-light-emphasis fst-italic"
            href="mailto:info@anygraphicstoday.com"
          >
            info@anygraphicstoday.com
          </a>
          <p className="fs-5">
            This Privacy Policy is intended to provide you with information
            about what personal information{' '}
            <a
              className="text-decoration-underline"
              href="https://anygraphicstoday.com/"
            >
              Any Graphics Today
            </a>{' '}
            collects about you and how it is used. If you have any questions,
            please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default privacyPolicy;

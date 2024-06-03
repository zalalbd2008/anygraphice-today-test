import React from 'react';
import Link from 'next/link';

interface Header {
  hedaer: string;
  breadcrumb ?:string;
}

const ServiceDetailsBanner = ({ hedaer, breadcrumb }: Header) => {
  return (
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-12 col-xl-12">
            <div className="text-center text-lg-start">
              <h1
                className="lh-sm  text-uppercase"
                style={{
                  fontSize: '46px',
                }}
              >
                {breadcrumb}
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  {/* <li className="breadcrumb-item">
                    <Link href="our-services">Our Services</Link>
                  </li> */}
                  <li className="breadcrumb-item active" aria-current="page">
                    {breadcrumb || hedaer}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsBanner;

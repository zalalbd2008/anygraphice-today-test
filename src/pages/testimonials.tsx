import HomeTestimonial from '@/components/containers/home/HomeTestimonial';
import Layout from '@/components/layout/Layout';
import React from 'react';
import sthumb from 'public/images/testimonial/image_1.png';
import sthumbtwo from 'public/images/testimonial/image_1.png';
import sthumbthree from 'public/images/testimonial/image_1.png';
import Image from 'next/image';
import { testimonialsContent } from '@/constant/inedex';
import AboutCta from '@/components/containers/home-two/AboutCta';

const testimonials = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="">
            <div className="d-flex flex-column justify-content-center  align-items-center mt-5">
              <div className="testimonial-s__slider-single">
                {testimonialsContent.map(testimonial => (
                  <div
                    className="row gaper align-items-center"
                    style={{
                      margin: '10px 0px',
                    }}
                  >
                    <div className="col-12 col-lg-4 col-xxl-4">
                      <div className="thumb">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="320"
                          viewBox="0 0 44 322"
                          fill="none"
                          className="d-none d-lg-block"
                        >
                          <path
                            d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                            stroke="#414141"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                      <div className="testimonial-s__content">
                        <div
                          className="quote"
                          style={{
                            fontSize: '70px',
                          }}
                        >
                          <i
                            className="fa-solid fa-quote-right"
                            style={{
                              color: 'red',
                            }}
                          ></i>
                        </div>
                        <div className="content">
                          <h4>{testimonial.content}</h4>
                        </div>
                        <div className="content-cta">
                          <h5>{testimonial.header}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutCta />
    </Layout>
  );
};

export default testimonials;

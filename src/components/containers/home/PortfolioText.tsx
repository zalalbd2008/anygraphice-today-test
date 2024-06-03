import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import one from 'public/images/portfolio/image_1.png';
import two from 'public/images/portfolio/image_2.png';
import three from 'public/images/portfolio/image_3.png';
import four from 'public/images/portfolio/image_4.png';
import five from 'public/images/portfolio/image_5.png';
import six from 'public/images/portfolio/image_6.png';
import seven from 'public/images/portfolio/image_7.png';
import dot from 'public/images/portfolio/dot.png';

const PortfolioText = ({show = true}) => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative ">
      <div
        className="portfolio__text-slider-w"
        style={{
          display: show ? 'block' : 'none',
        }}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${show ? 'container-fluid' : 'container'}`}>
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 0 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(0)}
            >
              <Link href="portfolio">
                <Image
                  src={one}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">UI/UX Design</h4>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 1 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(1)}
            >
              <Link href="portfolio">
                <Image
                  src={two}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">Marketing Design</h4>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 2 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(2)}
            >
              <Link href="portfolio">
                <Image
                  src={three}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">Publication Design</h4>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 3 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(3)}
            >
              <Link href="portfolio">
                <Image
                  src={four}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">Packaging Design</h4>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 4 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(4)}
            >
              <Link href="portfolio">
                <Image
                  src={five}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">Environmental Design</h4>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 5 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(5)}
            >
              <Link href="portfolio">
                <Image
                  src={six}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">Advertisement Design</h4>
              </div> */}
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">view all work</Link>
                </h4>
                <Link href="portfolio" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div> */}
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                'portfolio__single topy-tilt fade-top' +
                (hover === 6 ? ' portfolio__single-active' : ' ')
              }
              style={{
                borderRadius: '40px',
              }}
              onMouseEnter={() => setHover(6)}
            >
              <Link href="portfolio">
                <Image
                  src={seven}
                  alt="Image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Link>
              {/* <div className="portfolio__single-content">
                <Link href="#">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4 className="text-black">Food Menu Design</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default PortfolioText;

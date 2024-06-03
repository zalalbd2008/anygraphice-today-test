import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogthumb from 'public/images/offer/blog-thumb.png';
import one from 'public/images/offer/image_1.jpg';
import two from 'public/images/offer/image_2.jpg';
import three from 'public/images/offer/image_3.jpg';
import four from 'public/images/offer/Image_4.jpg';
import star from 'public/images/offer/star.png';

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll('.offer__cta-single');
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach(item => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Your Trusted Partner in Fast, Quality Graphic Design Services
              </h2>
              <div className="paragraph">
                <p>
                  At Any Graphics Today, we pride ourselves on delivering fast
                  and timely service without sacrificing quality, offering
                  competitive pricing, and providing a broad array of
                  customizable services tailored to your brand's identity. Our
                  team excels in direct communication, ensuring your vision
                  comes to life with professionalism and precision, backed by
                  our extensive experience and a commitment to
                  reliability and trust.
                </p>
              </div>
              {/* <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  view all services
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/service/custom-logo">
                    Custom Logo Design
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={one} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/service/brand">
                    Business Branding
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/service/website">
                    Web Development
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/service/packageing">
                    product design
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={four} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
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

export default HomeOffer;

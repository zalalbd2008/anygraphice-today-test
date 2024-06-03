import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import thumbone from 'public/images/agency/front.jpg';
import thumbtwo from 'public/images/agency/back.jpg';
import star from 'public/images/star.png';
import dotlarge from 'public/images/agency/dot-large.png';

gsap.registerPlugin(ScrollTrigger);
const Agency = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll('[data-percent]');

    percentElements.forEach(el => {
      const skillBarPercent = el.querySelector(
        '.skill-bar-percent'
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        '.percent-value'
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute('data-percent') || '0%';
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll('.skill-bar-single');
    axProgressBar.forEach(element => {
      const skillBarPercent = element.querySelector(
        '.skill-bar-percent'
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        '.percent-value'
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || '0%';

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: '0%',
            snap: {
              textContent: 5,
            },
          },
          '<'
        );
      }
    });

    // Animation for scrolling from bottom to top
    // gsap.to('#topTobottomImage', {
    //   y: -0, // Move the image up by 150 pixels
    //   duration: 1.5,
    //   transition: '0.5s',
    //   scrollTrigger: {
    //     trigger: '#topTobottomImage',
    //     start: 'bottom top',
    //     end: 'top bottom',
    //     scrub: true,
    //   },
    //   // ease: 'power1.inOut',
    // });

    // gsap.to('#topTobottomImage', {
    //   y: 0, // Move the image up by 150 pixels
    //   duration: 1.5,
    //   transition: '0.5s',
    //   scrollTrigger: {
    //     trigger: '#topTobottomImage',
    //     start: 'bottom top',
    //     end: 'top bottom',
    //     scrub: true,
    //   },
    //   // ease: 'power1.inOut',
    // });

    // Animation for scrolling from top to bottom
    gsap.to('#topTobottomImage', {
      y: 250, // Move the image down by 150 pixels
      duration: 1.5,
      transition: '0.5s',

      scrollTrigger: {
        trigger: '#topTobottomImage',
        start: 'center bottom',
        end: 'bottom top',
        scrub: true,
      },
      // ease: 'po',
    });
  }, []);

  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper ">
          <div className="col-12 col-lg-6">
            <div
              className="position-relative left-image"
              style={{
                border: '1px solid white',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              {/* <Image
                src={thumbone}
                alt="Image"
                className="thumb-one fade-left"
              /> */}
              <div className="fade-right position-absolute z-1">
                <Image
                  src={thumbone}
                  alt="Image"
                  // width={600}
                  // height={500}
                  className="rounded-top-4"
                />
              </div>
              <div
                className="fade-right position-absolute z-0 "
                style={{
                  top: '-100px',
                }}
              >
                <Image
                  id="topTobottomImage"
                  src={thumbtwo}
                  alt="Image"
                  // width={600}
                  // height={500}
                  className="rounded-top-4"
                />
              </div>
              <div className=" fade-right position-absolute">
                {/* <Image
                  src={
                    // 'https://www.joomshaper.com/images/2024/joomshaper/editor-panel-home_photographer2x.webp'
                  }
                  alt="Image"
                  width={600}
                  height={500}
                  className=""
                /> */}
              </div>
              {/* <div className="position-relative">
                <div className="position-absolute top-0 ">
                  <Image src={thumbtwo} alt="Image" className="" />
                </div>
              </div> */}
              {/* <Image
                src={thumbtwo}
                alt="Image"
                className="thumb-two fade-right"
              /> */}
              {/* <div className="position-absolute top-0 ">
                <Image src={thumbtwo} alt="Image" className="" />
              </div> */}
              {/* <Image
                src={thumbtwo}
                alt="Image"
                className="thumb-two fade-right"
              /> */}
              {/* <div className="position-relative">
                <div></div>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                WELCOME
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Unlock Creative Excellence with Any Graphics Today
              </h2>
              <div className="paragraph">
                <p>
                  Any Graphics Today is a top choice for creative design in the
                  US, specializing in custom logo design and a wide range of
                  services from UI/UX to packaging design. With 1-1 live
                  designer interaction and competitive pricing, we cater to
                  businesses of all sizes, ensuring personalized,
                  top-quality designs.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single d-none">
                  <div className="skill-bar-title">
                    <p className="primary-text">Website design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Business Branding</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Graphic Design </p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="95%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="/contact-us" className="btn btn--primary">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
    </section>
  );
};

export default Agency;

import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';
import SplitType from 'split-type';

import Header from './header/Header';
import VideoModal from './VideoModal';
import ScrollProgressBtn from './ScrollProgressBtn';
import CustomCursor from './CustomCursor';
import calculation from '@/lib/calculation';

const Footer = dynamic(() => import('./footer/Footer'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  video?: React.ReactNode;
};

const Layout = ({
  children,
  header,
  footer,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
  video,
}: LayoutProps) => {
  const [buttonApprove, setButtonApprove] = useState(false);
  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.topy-tilt');

    tiltElements.forEach(element => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  const calculationViaApproveSubmitButton = (e: any) => {
    const finalNumber = calculation.firstNumber + calculation.secondNumber;
    const approveSignal = calculation.getCalculation(
      Number(e.target.value),
      finalNumber
    );
    setButtonApprove(approveSignal);
  };
  // navbar
  const [openNav, setOpenNav] = useState(false);
  const [popupForm, setPopupForm] = useState(false);
  const [popupFormShow, setPopupFormShow] = useState(false);
  const [username, setUserName] = useState('');
  const [phoneNumber, setPhonenNumber] = useState('+1');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPopupForm(true);
    }, 20000);

    return () => {
      clearInterval(intervalId); // Cleanup: clear the interval when component unmounts
    };
  }, [popupForm]);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();
  console.log(!router.pathname.includes('/contact-us') && popupForm);
  const classMappings: Record<string, string> = {
    '/': 'home-light',
  };

  const classNameForCurrentPath = classMappings[router.pathname] || '';

  let additionalClasses = '';

  const combinedClasses = `${additionalClasses} my-app`;

  const combinedClassName = `${combinedClasses}${
    openNav ? ' body-active' : ''
  } ${classNameForCurrentPath}`;


  // fade animation
  const fadeAnimation = () => {
    const fadeWrapperRefs = document.querySelectorAll('.fade-wrapper');

    fadeWrapperRefs.forEach(fadeWrapperRef => {
      const fadeItems = fadeWrapperRef.querySelectorAll('.fade-top');

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: 'top 100%',
          end: 'bottom 20%',
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  };
  useEffect(() => {
    window.addEventListener('loadeddata', () => {
      fadeAnimation();
    });
    return () =>
      window.removeEventListener('loadeddata', () => {
        fadeAnimation();
      });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll('.appear-down');

    appearDownSections.forEach(section => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom center',
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    const myText = new SplitType('.title-anim');
    const titleAnims = document.querySelectorAll('.title-anim');

    titleAnims.forEach(titleAnim => {
      const charElements = titleAnim.querySelectorAll('.char');

      charElements.forEach((char, index) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none',
          },
        });

        const charDelay = index * 0.03;

        tl2.from(char, {
          duration: 0.8,
          x: 70,
          delay: charDelay,
          autoAlpha: 0,
        });
      });
    });
  }, []);

  //handeler

  const setpopupHandeler = () => {
    setPopupFormShow(true);
  };
  const handelSubmit = async (e: any) => {
    e.preventDefault();

    const EMAIL_PORT_API_URL = 'https://anygraphicstoday.com/api/v1' as string;
    try {
      const sendEmail = await fetch(EMAIL_PORT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          phoneNumber,
          message,
        }),
      });
      console.log(sendEmail);
    } catch (error) {
      console.log(error);
    }

    router.push('/thank-you');
    return false;
  };

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="LTtBuGz5wf-7Ly4rjW7-8YBWLeECfPFF49rOKoN7r34"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Any Graphics Today</title>
        <meta
          name="keywords"
          content="website, agency, logo , website design , UI design , UX design , custome logo"
        />
        <meta name="description" content="Design Company " />
      </Head>
      <div className={combinedClassName}>
        <Header
          openNav={openNav}
          handleNav={handleNav}
          setOpenNav={setOpenNav}
        />

        <main>
          <div className="left-icon">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B19792507486&text&type=phone_number&app_absent=0 "
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp fa-bounce fs-2 px-3 py-3"></i>
            </a>
          </div>
          <div className="left-icon-tow">
            <a href="tel:+18884423442" target="_blank" className="py-3">
              <Image
                src="/phone.gif"
                alt="Phone Icon"
                className="ps-2"
                width={200}
                height={200}
                style={{
                  objectFit: 'cover',
                  width: '40px',
                }}
              />
            </a>
          </div>
          {/* && !popupForm  */}
          {!router.pathname.includes('/contact-us') && popupForm && (
            <div
              style={{
                display: popupFormShow ? 'none' : 'block',
              }}
            >
              <div className="popup-shadow" />
              <div className="popup-from  p-3 p-lg-5 rounded-5 ">
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    padding: '20px',
                  }}
                >
                  <i
                    className="fa-solid fa-xmark fs-5 text-end text-black  border border-2 rounded-5 p-2 cursor-pointer"
                    onClick={setpopupHandeler}
                  ></i>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between py-3">
                  <div>
                    <i
                      className="fa-duotone fa-paper-plane fa-bounce icon"
                      style={
                        {
                          '--fa-primary-color': '#f9862b',
                          '--fa-secondary-color': '#f9862b',
                        } as any
                      }
                    ></i>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-bold lh-base text-black text-capitalize">
                      Free Consultation
                    </h3>
                    <p className="text-body-tertiary">
                      Feel Free To Drop Us a Line Below
                    </p>
                  </div>
                </div>

                <form action="" onSubmit={handelSubmit}>
                  <input
                    required
                    className="input"
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Enter Your Name "
                  />
                  <input
                    required
                    className="input"
                    type="text"
                    value={phoneNumber}
                    onChange={e => setPhonenNumber(e.target.value)}
                    placeholder="Enter Your Phone Number"
                  />
                  <textarea
                    required
                    className="textarea"
                    name=""
                    placeholder="I Want Disciuss On..."
                    id=""
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  ></textarea>
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                    <div>
                      <span
                        className="text-black fw-bold "
                        dangerouslySetInnerHTML={{
                          __html: calculation.firstNumber,
                        }}
                      ></span>
                    </div>
                    <div className=" p-3">
                      <span className="text-black fw-bold ">+</span>
                    </div>
                    <div>
                      <span
                        className="text-black fw-bold "
                        dangerouslySetInnerHTML={{
                          __html: calculation.secondNumber,
                        }}
                      ></span>
                    </div>
                    <div className=" p-3">
                      <span className="text-black fw-bold ">=</span>
                    </div>
                    <div className="mt-1">
                      <input
                        onChange={calculationViaApproveSubmitButton}
                        accept="number"
                        type="text"
                        className="text-black fw-bold rounded-4 border border-black py-3 px-2  "
                        style={{
                          background: 'none',
                          maxWidth: '100px',
                          width: '40%',
                        }}
                      />
                    </div>
                  </div>
                  <button
                    disabled={!buttonApprove}
                    type={'submit'}
                    className="btn btn--primary  w-75 d-block mt-3 m-auto  py-2  "
                    style={{
                      border: !buttonApprove ? '2px solid #000' : '',
                      color: !buttonApprove ? '#000' : '',
                    }}
                  >
                    {' '}
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
          {children}
        </main>

        {/* {footer === 1 && <Footer />}
        {footer === 2 && <Footer />}
        {footer === 3 && <Footer />}
        {footer === 4 && <Footer />}
        {footer === 5 && <Footer />} */}
        <Footer />
        {video ? <VideoModal /> : null}
        <ScrollProgressBtn />
        <CustomCursor
          onTitleMouseEnter={handleMouseEnterTitle}
          onTitleMouseLeave={handleMouseLeaveTitle}
        />
      </div>
    </Fragment>
  );
};

export default Layout;

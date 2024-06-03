import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from 'public/images/any_graphics_today.png';
import logoLight from 'public/images/any_graphics_today.png';
import Offcanvas from './Offcanvas';

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const defaultClasses = 'primary-navbar cmn-nav';

  const combinedClasses = `${
    scrolled ? ' navbar-active' : ' '
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === '/') {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image
                        src={logoSrc}
                        priority
                        alt="Image"
                        className="moble-size-logo"
                      />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="/" className=" pe-3 text-uppercase">
                          Home
                        </Link>
                      </li>
                      <li className="navbar__item">
                        <Link href="/about-us" className="pe-1 text-uppercase">
                          About Us
                        </Link>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="/service/brand">
                              Brand & Identity Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/marketing">
                              Advertisement And Marketing Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/art">
                              Illustration and Art
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/ui">UI/UX Design</Link>
                          </li>
                          <li>
                            <Link href="/service/motion">Motion Graphics</Link>
                          </li>
                          <li>
                            <Link href="/service/publication">
                              Publication Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/website">Website Design</Link>
                          </li>
                          <li>
                            <Link href="/service/packageing">
                              Packaging Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/custom-logo">
                              Custom Logo Design
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navbar__item nav-fade">
                        <Link href="/portfolio" className="pe-3 text-uppercase">
                          Portfolio
                        </Link>
                      </li>

                      <li className="navbar__item nav-fade">
                        <Link href="/teams" className="pe-3 text-uppercase">
                          {' '}
                          Team Member
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link
                          href="/testimonials"
                          className="pe-3 text-uppercase"
                        >
                          {' '}
                          Testimonials 
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="/blog" className="text-uppercase">
                          Blog 
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="/contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>

                    {/*
                     */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;

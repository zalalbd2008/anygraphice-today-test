import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? ' nav__dropdown-active' : ' ';
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? ' navbar__item-active' : ' ';
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? ' nav__dropdown-active' : ' ';
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? ' navbar__item-active' : ' ';
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener('resize', handleResizeHeader);

    return () => {
      window.removeEventListener('resize', handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={'offcanvas-menu' + (openNav ? ' show-offcanvas-menu' : ' ')}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item nav-fade">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      'services'
                    )}`}
                    onClick={() => handleSubmenu('services')}
                  >
                    Services
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen('services')}`}
                  >
                    <li>
                      <Link href="/service/brand">Brand & Identity Design</Link>
                    </li>
                    <li>
                      <Link href="/service/marketing">
                        Advertisement And Marketing Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/art">Illustration and Art</Link>
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
                      <Link href="/service/packageing">Packaging Design</Link>
                    </li>
                    <li>
                      <Link href="/service/custom-logo">
                        Custome Logo Design
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
                  <Link href="/testimonials" className="pe-3 text-uppercase">
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
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="/contact-us" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/AnyGraphicsToday"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://twitter.com/anygraphics2day"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/company/any-graphics-today/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="https://www.instagram.com/anygraphicstoday/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;

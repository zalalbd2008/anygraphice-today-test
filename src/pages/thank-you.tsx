import Header from '@/components/layout/header/Header';
import Link from 'next/link';
import React, { useState } from 'react';

function thankYou() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div>
      <Header openNav={openNav} handleNav={handleNav} setOpenNav={setOpenNav} />
      <div>
        <style>
          {`

            .thankU {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
            .thankU-child {
  padding: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  .thank-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    h1 {
      grid-column: span 3;
      margin-top: 40px;
      font-size: 200px;
      line-height: 150px;
    }
    .thank-botton {
      border-radius: 50%;
      width: 150px;
      display: flex;
      align-items: center;
      // flex-direction: column;
      height: 150px;
    }
  }

  .child-header {
    width: 40%;
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 0px 20px;

    p {
      text-align: start;
      width: 40%;
      font-size: 14px;
      font-weight: 400;
      color: rgb(249, 245, 245);
    }
    a {
      display: none;
    }
  }
  .pra {
    width: 80%;
    display: block;
    margin: auto;
  }
}
@media screen and (max-width: 1200px) {
  .thankU-child {
    .thank-main {
      h1 {
        font-size: 100px;
        line-height: 150px;
      }
    }

    .child-header {
      width: 70%;
    }
  }
}
@media screen and (max-width: 900px) {
  .thankU-child {
    width: 90%;
    flex-direction: column-reverse;
    align-items: center;
    border: 1px solid #fff;
    .thank-main {
      display: grid;
      grid-template-columns: 1fr;
      h1 {
        margin-top: 40px;
        font-size: 40px;
        line-height: 100px;
      }
      .thank-botton {
        display: none;
      }
    }
    .child-header {
      width: 90%;
      display: block;
      p {
        text-align: center;
        width: 100%;
      }
      a {
        margin: 10px 0px 0px 0px;
        width: 50%;
        margin: auto;
        display: block;
      }
    }
  }
}
            
            
            
            `}
        </style>
        <div className="pt-4 thankU">
          <div className="thankU-child ">
            <div className="child-header">
              <p>Your message has been successfully received.</p>
              <p>
                {' '}
                We appreciate your interest and will get back to you as soon as
                possible.In the meantime, feel free to explore more of our
                website.
              </p>
              <Link href="/contact-us" className="btn btn--secondary ">
                Go To Home
              </Link>
            </div>
            <div className="thank-main ">
              <h1 className="text-start">Thank You</h1>
              <div>
                <Link
                  href="/"
                  className="btn btn--secondary thank-botton"
                >
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default thankYou;

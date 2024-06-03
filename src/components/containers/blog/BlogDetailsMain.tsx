import React from "react";
import Image from "next/image";
import Link from "next/link";
import poster from "public/images/news/poster.png";
import groupone from "public/images/news/group-one.png";
import grouptwo from "public/images/news/group-two.png";
import ten from "public/images/news/ten.png";
import eleven from "public/images/news/eleven.png";
import twelve from "public/images/news/twelve.png";
import thirteen from "public/images/news/thirteen.png";
import fourteen from "public/images/news/fourteen.png";

const BlogDetailsMain = ({content} : any) => {
  return (
    <section className="section blog-main blog-details fade-wrapper">
      <div className="container">
        <div className="row gaper justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="blog-details__content">
              <div className="bd-thumb fade-top">
                <Image src={content.image} alt="Image" />
              </div>
              <div className="bd-content">
                <div className="bd-meta">
                  <div className="meta__left">
                    <span></span>
                    <p>{content.date}</p>
                  </div>
                </div>
                <div
                  className="bd-content-info"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMain;

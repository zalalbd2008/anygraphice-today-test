import Image from 'next/image';

function Icon() {
  return (
    <>
      <div
        className="left-icon"
        // style={{
        //   marginTop: '125px',
        // }}
      >
        <div>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B19792507486&text&type=phone_number&app_absent=0 "
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp fa-bounce fs-5  p-3 py-3"></i>
          </a>
        </div>
      </div>
      <div
        className="left-icon-tow "
        // style={{
        //   marginTop: '120px',
        // }}
      >
        <a
          href="tel:+18884423442"
          target="_blank"
          className="py-3"
        >
          <Image
            src="/phone.gif"
            alt="phone-icon"
            className="ps-1 "
            width={200}
            height={200}
            style={{
              objectFit: 'cover',
              width: '25px',
            }}
          />
        </a>
      </div>
    </>
  );
}

export default Icon;

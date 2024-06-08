import Image from 'next/image';

function Icon() {
  return (
    <>
      <div className="left-icon mt-4 mt-md-0 ">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B19792507486&text&type=phone_number&app_absent=0 "
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp fa-bounce fs-3 px-3 py-3"></i>
        </a>
      </div>
      <div className="left-icon-tow mt-4 mt-md-0">
        <a
          href="tel:+18884423442"
          target="_blank"
          className="py-3"
        >
          <Image
            src="/phone.gif"
            alt="phone-icon"
            className="ps-2 "
            width={200}
            height={200}
            style={{
              objectFit: 'cover',
              width: '34px',
            }}
          />
        </a>
      </div>
    </>
  );
}

export default Icon;

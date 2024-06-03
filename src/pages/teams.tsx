import AboutCta from '@/components/containers/home-two/AboutCta';
import HomeTwoModal from '@/components/containers/home-two/HomeTwoModal';
import PortfolioText from '@/components/containers/home/PortfolioText';
import Layout from '@/components/layout/Layout';
import CmnBanner from '@/components/layout/banner/CmnBanner';

const teams = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner title="Team Member" navigation="Teams Member" />

      <HomeTwoModal />

      <div className="my-4 pt-5 px-5">
        <h3 className="fs-3 lh-sm text-light-emphasis ">
          The Any Graphics Design team is renowned for its exceptional talent
          and high skill level, particularly in utilizing industry-standard
          graphic design software. Our expertise in Adobe Creative
          Suite—Photoshop, Illustrator, and InDesign—alongside modern design
          tools like Sketch and Figma, especially for UI/UX design, sets us
          apart in delivering cutting-edge visual solutions.
        </h3>
        <div className="mt-4">
          <h4 className="fst-italic fw-bold text-light-emphasis">
            Adobe Photoshop
          </h4>
          <p className="fs-5">
            Adobe Photoshop is the cornerstone for digital image manipulation
            and editing. Our designers use Photoshop for creating complex photo
            montages, designing web and social media graphics, and retouching
            images. Its robust set of tools allows for detailed manipulation,
            making it ideal for tasks that require precision in pixel-based
            editing.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="fst-italic fw-bold text-light-emphasis">
            Adobe Illustrator
          </h4>
          <p className="fs-5">
            Adobe Illustrator is our go-to vector graphics software. It's
            indispensable for designing logos, icons, and illustrations that
            need to scale without losing quality. Illustrator's precision
            drawing tools and typographic controls enable our team to craft
            sharp, scalable graphics perfect for branding and identity projects.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="fst-italic fw-bold text-light-emphasis">
            Adobe InDesign
          </h4>
          <p className="fs-5">
            Adobe InDesign is the preferred choice for page layout and design.
            Whether it's for print or digital, our designers use InDesign to
            compile complex layouts for brochures, magazines, reports, and
            books. Its seamless integration with Photoshop and Illustrator
            ensures a fluid design process, enabling us to maintain visual
            consistency across all materials.
          </p>
        </div>
        <p className="fs-5 fst-italic text-light-emphasis pt-4">
          These tools are foundational to our design process, enabling us to
          execute a wide array of graphic design services with finesse and
          precision. Their versatility and powerful capabilities allow our
          designers to explore creative boundaries, ensuring every project
          outcome is not only visually stunning but also strategically aligned
          with our clients' objectives.
        </p>
      </div>
      <AboutCta />
    </Layout>
  );
};

export default teams;

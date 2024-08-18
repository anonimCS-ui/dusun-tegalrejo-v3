import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Footer from "../../Fragment/Footer";
import Header from "../../Fragment/Header";
import Paragraf from "../../Element/Paragraf";
import SlideShow from "../../Fragment/SlideShow";
import Quote from "../../Fragment/Quote";
import SocialType from "../../Fragment/SocialType";

function AboutUs() {
  return (
    <>
      <Header />
      <section id="aboutUs" className="aboutUs">
        <div className="item item-1">
          <span
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/people.png" />
          </span>
        </div>
        <div
          className="item item-2"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Koordinat Dusun Tegalrejo" />
          <Heading.Three title="7° 47' 46&quot; LS 110° 38' 28&quot; BT" />
          <Image iLink="/dusun3d.png" />
          <Paragraf sentence="Dusun Tegalrejo, Kelurahan Tegalrejo, Kecamatan Gedangsari, Kabupaten Gunungkidul, Provinsi Daerah Istimewa Yogyakarta, Indonesia" />
        </div>
        <div
          className="item item-3"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Lihat Kehidupan Masyarakat Dusun Tegalrejo" />
          <Heading.Three title="Masyarakat Dusun Tegalrejo Identik Dengan Kebersamaannya" />
          <SlideShow.Two />
        </div>
        <div className="item item-4">
          <SocialType />
        </div>
        <div className="item item-5">
          <Quote.Two />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;

import Image from "../../Element/Image";
import Heading from "../../Element/Heading";
import Paragraf from "../../Element/Paragraf";
import Icon from "../../Element/Icon";

import { VscLocation } from "react-icons/vsc";
import { TiLocationArrowOutline } from "react-icons/ti";

const Overview = () => {
  return (
    <>
      <div className="row">
        <div
          className="col col-1"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8h_8RSHSVYo?si=da5XIAstuEWmKc7t"
            title="YouTube video player"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="col col-2"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <Heading.Two title="Dukuh Tegalrejo" />
          <Paragraf sentence="Masyarakat Tegalrejo terkenal dengan keramahan dan kehangatan mereka. Kehidupan sehari-hari di dusun ini dipenuhi dengan semangat gotong royong dan saling membantu, menciptakan lingkungan yang harmonis dan penuh rasa kekeluargaan. Berbagai kegiatan sosial dan tradisi budaya masih dilestarikan dengan baik, menjadikan Tegalrejo sebagai contoh nyata dari kearifan lokal yang tetap hidup di tengah arus modernisasi." />
          <Paragraf sentence="Dengan demikian, Tegalrejo bukan hanya menawarkan keindahan alam, tetapi juga pengalaman budaya yang kaya dan berharga bagi siapa pun yang berkunjung." />
        </div>
      </div>
    </>
  );
};

export default Overview;

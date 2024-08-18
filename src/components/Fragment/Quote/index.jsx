import Image from "../../Element/Image";
import Heading from "../../Element/Heading";
import Paragraf from "../../Element/Paragraf";
import Icon from "../../Element/Icon";

import { MdFormatQuote } from "react-icons/md";

function Quote() {
  return <></>;
}

function One() {
  return (
    <>
      <div className="row">
        <div
          className="col col-1"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="0"
          data-aos-once="true"
        >
          <Icon iconName={<MdFormatQuote />} />
          <Paragraf sentence="Sebagai seseorang yang telah lama tinggal di Dusun Tegalrejo, saya bisa bilang bahwa tempat ini penuh dengan keindahan alam yang menakjubkan dan penduduknya yang selalu ramah dan gotong royong, membuat suasana desa jadi sangat hangat dan nyaman." />
        </div>
        <div
          className="col col-2"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <Image iLink="public/people.png" />
        </div>
      </div>
    </>
  );
}

function Two() {
  return (
    <>
      <div className="row">
        <div
          className="col col-1"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="0"
          data-aos-once="true"
        >
          <Image iLink="public/people2.png" />
        </div>
        <div
          className="col col-2"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <Heading.Three title="Welcome to Dusun Tegalrejo" />
          <Paragraf sentence="Sebagai seseorang yang telah lama tinggal di Dusun Tegalrejo, saya bisa bilang bahwa tempat ini penuh dengan keindahan alam yang menakjubkan dan penduduknya yang selalu ramah dan gotong royong, membuat suasana desa jadi sangat hangat dan nyaman." />
        </div>
      </div>
    </>
  );
}

Quote.One = One;
Quote.Two = Two;

export default Quote;

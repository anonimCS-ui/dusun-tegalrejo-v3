import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Paragraf from "../../Element/Paragraf";
import Footer from "../../Fragment/Footer";
import Header from "../../Fragment/Header";
import Series from "../../Fragment/Series";

function History() {
  const images = [
    {
      id: 1,
      url: "/kantor-lurah.jpg",
    },
    {
      id: 2,
      url: "/masjid.jpg",
    },
    {
      id: 3,
      url: "/balai-dusun.jpg",
    },
    {
      id: 4,
      url: "/balai-dusun-2.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="history" className="history">
        <div className="item item-1">
          <Image iLink="/people3.png" />
        </div>
        <div className="item item-2">
          <Heading.Two title="Fasilitas Dusun Tegalrejo" />
          <Paragraf sentence="Dusun Tegalrejo dilengkapi dengan berbagai fasilitas yang mendukung kehidupan warganya. Terdapat tempat ibadah sebagai pusat kegiatan keagamaan, kantor lurah untuk pelayanan administratif dan masyarakat, serta berbagai tempat umum lainnya seperti balai pertemuan dan lapangan olahraga yang sering digunakan untuk kegiatan sosial dan rekreasi. Fasilitas-fasilitas ini menjadi pusat interaksi dan kegiatan masyarakat, menjadikan Dusun Tegalrejo sebagai lingkungan yang harmonis dan terpadu." />
        </div>
        <div className="item item-3">
          <Series />
        </div>
        <div className="item item-4">
          {images.map((item) => (
            <div
              data-aos="zoom-up"
              data-aos-duration="1500"
              data-aos-once="true"
              key={item.id}
            >
              <Image iLink={item.url} />
            </div>
          ))}
          <span>
            <Image iLink="/dusun3d.png" />
          </span>
        </div>
        <div className="item item-5">
          <Paragraf sentence="Dusun Tegalrejo telah berkembang melalui beberapa generasi, membawa warisan kaya akan budaya dan tradisi yang tetap terjaga. Setiap generasi berkontribusi dalam membangun dusun ini, menjaga keharmonisan dan kebersamaan yang menjadi ciri khas Tegalrejo. Dengan semangat yang terus hidup, harapan besar untuk masa depan yang lebih cerah dan makmur terletak di pundak generasi berikutnya, yang siap melanjutkan perjuangan dan inovasi untuk kemajuan bersama." />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default History;

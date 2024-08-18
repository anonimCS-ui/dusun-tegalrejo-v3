import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Paragraf from "../../Element/Paragraf";
import Accordion from "../../Fragment/Accordion";
import Footer from "../../Fragment/Footer";
import Header from "../../Fragment/Header";
import ManagerList from "../../Fragment/ManagerList";

function Manager() {
  return (
    <>
      <Header />
      <section id="manager" className="manager">
        <div className="item item-1">
          <div
            className="row"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/people5.png" />
          </div>
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Perangkat Dusun Tegalrejo" />
          <Paragraf sentence="Dusun Tegalrejo memiliki struktur pemerintahan yang lengkap dan terorganisir. Dimulai dari Presiden di tingkat nasional, diikuti oleh Gubernur untuk provinsi, Bupati di kabupaten, dan Kepala Camat di kecamatan. Di tingkat desa, terdapat Kepala Lurah yang bekerja sama dengan Kepala Dusun, Kepala RW, dan 4 Kepala RT. Setiap pejawat menjalankan perannya masing-masing untuk memastikan kesejahteraan dan kemajuan masyarakat Dusun Tegalrejo. Dengan struktur ini, pelayanan dan koordinasi antara berbagai tingkatan pemerintahan dapat berjalan dengan efektif dan efisien." />
        </div>
        <div
          className="item item-3"
          data-aos="zoom-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <ManagerList />
        </div>
        <div
          className="item item-4"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Perangkat Dusun Terorganisir" />
          <Paragraf sentence="Dimulai dari Presiden di tingkat nasional, diikuti oleh Gubernur untuk provinsi, Bupati di kabupaten, dan Kepala Camat di kecamatan. Di tingkat desa, terdapat Kepala Lurah yang bekerja sama dengan Kepala Dusun, Kepala RW, dan 4 Kepala RT. Setiap pejabat menjalankan perannya masing-masing untuk memastikan kesejahteraan dan kemajuan masyarakat Dusun Tegalrejo. Dengan struktur ini, pelayanan dan koordinasi antara berbagai tingkatan pemerintahan dapat berjalan dengan efektif dan efisien. Terima kasih atas partisipasi dan kontribusi Anda dalam diskusi hari ini." />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Manager;

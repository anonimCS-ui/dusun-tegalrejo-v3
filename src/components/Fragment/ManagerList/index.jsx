import { useState } from "react";
import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Paragraf from "../../Element/Paragraf";

function ManagerList() {
  const [activeIndex, setActiveIndex] = useState([null]);

  const toggleAccordion = function (index) {
    const newActiveIndex = [...activeIndex];
    newActiveIndex[index] = !newActiveIndex[index];
    setActiveIndex(newActiveIndex);
  };

  const data = [
    {
      id: 1,
      classGroup: "row",
      img: "/manager.png",
      name: "Presiden RI",
      text: "Pasal 4 - 17 UUD 1945",
      moreText:
        "mengatur tentang kekuasaan eksekutif yang dipegang oleh Presiden, termasuk tugas, wewenang, dan tanggung jawabnya.",
    },
    {
      id: 2,
      classGroup: "row row-reverse",
      img: "/manager2.png",
      name: "Gubernur DIY",
      text: "Pasal 18 ayat (4) UUD 1945.",
      moreText:
        "menyebutkan bahwa Gubernur, Bupati, dan Walikota masing-masing sebagai kepala pemerintahan daerah provinsi, kabupaten, dan kota dipilih secara demokratis.",
    },
    {
      id: 3,
      classGroup: "row",
      img: "/manager3.png",
      name: "Bupati Gunungkidul",
      text: "Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah.",
      moreText:
        "undang-undang ini menjadi landasan utama yang mengatur kedudukan, tugas, wewenang, serta hak dan kewajiban Bupati sebagai kepala daerah kabupaten. Bupati bertindak sebagai kepala pemerintahan kabupaten sekaligus perpanjangan tangan pemerintah pusat di daerah.",
    },
    {
      id: 4,
      classGroup: "row row-reverse",
      img: "/manager4.png",
      name: "Kepala Camat Gedangsari",
      text: "Peraturan Pemerintah Nomor 17 Tahun 2018 tentang Kecamatan.",
      moreText:
        "peraturan ini memberikan penjelasan lebih rinci mengenai tugas, wewenang, dan tanggung jawab camat. Camat bertanggung jawab atas pelaksanaan kegiatan pemerintahan umum dan tugas-tugas yang diberikan oleh bupati/walikota.",
    },
    {
      id: 5,
      classGroup: "row",
      img: "/manager.png",
      name: "Kepala Lurah Gedangsari",
      text: "Peraturan Pemerintah Nomor 73 Tahun 2005 tentang Kelurahan.",
      moreText:
        "peraturan ini menjelaskan secara detail mengenai tugas, wewenang, hak, dan kewajiban lurah. Lurah bertugas melaksanakan kegiatan pemerintahan, pembangunan, dan kemasyarakatan serta memberikan pelayanan kepada masyarakat di wilayah kelurahan.",
    },
    {
      id: 6,
      classGroup: "row row-reverse",
      img: "/manager2.png",
      name: "Kepala Dusun Tegalrejo",
      text: "Undang-Undang Nomor 6 Tahun 2014 tentang Desa.",
      moreText:
        "UU ini mengatur tentang pemerintahan desa secara umum, termasuk struktur pemerintahan di desa. Meskipun tidak secara spesifik menyebutkan kepala dukuh, peraturan ini memberikan kerangka kerja bagi perangkat desa, termasuk peran dan tanggung jawab yang dapat disesuaikan dengan peraturan desa atau adat setempat.",
    },
    {
      id: 7,
      classGroup: "row",
      img: "/manager3.png",
      name: "Ketua RW 08",
      text: "Peraturan Menteri Dalam Negeri Nomor 18 Tahun 2018 tentang Lembaga Kemasyarakatan Desa dan Lembaga Adat Desa.",
      moreText:
        "Peraturan ini mengatur tentang lembaga kemasyarakatan di tingkat desa, yang mencakup Rukun Warga (RW) dan Rukun Tetangga (RT). Di sini diatur tugas, fungsi, dan tanggung jawab RW dalam membantu pemerintah desa atau kelurahan dalam bidang pemerintahan, pembangunan, dan kemasyarakatan.",
    },
  ];

  const data2 = [
    {
      id: 1,
      img: "/manager.png",
      name: "Ketua RT 01",
    },
    {
      id: 2,
      img: "/manager2.png",
      name: "Ketua RT 02",
    },
    {
      id: 3,
      img: "/manager3.png",
      name: "Ketua RT 03",
    },
    {
      id: 4,
      img: "/manager4.png",
      name: "Ketua RT 04",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div className={item.classGroup} key={item.id}>
          <div className="col col-1" onClick={() => toggleAccordion(index)}>
            <Image iLink={item.img} />
            <Heading.Three title={item.name} />
          </div>
          <div className="col col-2">
            <div className="line"></div>
            <Paragraf sentence={item.text} />
            <span className={`moreText ${activeIndex[index] ? "active" : ""}`}>
              <Paragraf sentence={item.moreText} />
            </span>
          </div>
        </div>
      ))}
      <div className="line"></div>
      <div className="row row-2">
        {data2.map((item) => (
          <div className="col" key={item.id}>
            <Image iLink={item.img} />
            <Heading.Three title={item.name} />
          </div>
        ))}
        <div className="line"></div>
      </div>
      <div className="row row-3">
        <Paragraf sentence="Peraturan ini mengatur tentang lembaga kemasyarakatan di tingkat desa, yang mencakup Rukun Warga (RW) dan Rukun Tetangga (RT). Di sini diatur tugas, fungsi, dan tanggung jawab RW dalam membantu pemerintah desa atau kelurahan dalam bidang pemerintahan, pembangunan, dan kemasyarakatan." />
      </div>
    </>
  );
}

export default ManagerList;

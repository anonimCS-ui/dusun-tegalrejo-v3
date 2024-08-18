import Heading from "../../Element/Heading";
import Icon from "../../Element/Icon";
import Paragraf from "../../Element/Paragraf";

import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { RiHome2Fill } from "react-icons/ri";

const Series = function () {
  const data = [
    {
      id: 1,
      classGroup: "row row-1",
      icon: <RiCustomerService2Fill />,
      event: "Kantor Kelurahan",
      description:
        "Kantor kelurahan di Dusun Tegalrejo melayani administrasi warga, seperti pengurusan KTP, KK, dan akta. Selain itu, menjadi pusat koordinasi program desa dan komunikasi antara pemerintah serta masyarakat.",
    },
    {
      id: 2,
      classGroup: "row row-2",
      icon: <IoMoon />,
      event: "Masjid",
      description:
        "Masjid di Dusun Tegalrejo digunakan untuk shalat berjamaah, shalat Jumat, dan kegiatan keagamaan besar. Musala digunakan untuk shalat sehari-hari dan aktivitas keagamaan skala kecil.",
    },
    {
      id: 3,
      classGroup: "row row-3",
      icon: <CiHome />,
      event: "Balai Dusun",
      description:
        "Balai Dusun Tegalrejo digunakan untuk pertemuan warga, acara komunitas, pelatihan, serta mendukung program pemerintah desa dan pemberdayaan masyarakat.",
    },
    {
      id: 4,
      classGroup: "row row-4",
      icon: <RiHome2Fill />,
      event: "Balai Desa",
      description:
        "Balai Desa Tegalrejo adalah pusat pemerintahan dan pelayanan masyarakat, digunakan untuk kegiatan administratif, rapat, serta acara resmi dan sosial warga.",
    },
  ];

  return (
    <>
      {data.map((item) => (
        <div
          className={item.classGroup}
          key={item.id}
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Icon iconName={item.icon} />
          <Heading.Three title={item.event} />
          <Paragraf sentence={item.description} />
        </div>
      ))}
    </>
  );
};

export default Series;

import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Paragraf from "../../Element/Paragraf";

const SocialType = function () {
  const data = [
    {
      id: 1,
      image: "public/st.png",
      name: "Petani/Perkebunan",
    },
    {
      id: 2,
      image: "public/st3.png",
      name: "Pedagang",
    },
    {
      id: 3,
      image: "public/st4.png",
      name: "Pegawai Negeri",
    },
    {
      id: 4,
      image: "public/st2.png",
      name: "Buruh Harian",
    },
    {
      id: 5,
      image: "public/st5.png",
      name: "Wiraswasta",
    },
    {
      id: 6,
      image: "public/st6.png",
      name: "Ibu Rumah Tangga",
    },
    {
      id: 7,
      image: "public/st7.png",
      name: "Pelajar/Mahasiswa",
    },
    {
      id: 8,
      image: "public/st8.png",
      name: "Pekerja Konstruksi",
    },
  ];

  return (
    <>
      <div
        className="row row-1"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <Heading.Two title="Kelompok Masyarakat di Dusun Tegalrejo" />
        <Paragraf sentence="Di Dusun Tegalrejo, terdapat petani yang tekun menggarap lahan pertanian, pedagang yang semarak berjualan di pasar lokal, pekerja konstruksi yang berkiprah dengan perusahaan swasta di kota, serta pegawai yang berdedikasi dalam sektor pendidikan, kesehatan, dan pemerintahan. Mereka bersama-sama menjaga dan memajukan dusun dengan semangat gotong royong." />
      </div>
      <div
        className="row row-2"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        {data.map((item) => (
          <span className="col" key={item.id}>
            <Image iLink={item.image} />
            <Heading.Three title={item.name} />
          </span>
        ))}
      </div>
    </>
  );
};

export default SocialType;

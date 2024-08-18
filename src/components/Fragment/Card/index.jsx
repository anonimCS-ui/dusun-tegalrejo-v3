import Anchor from "../../Element/Anchor";
import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Paragraf from "../../Element/Paragraf";

function Card() {
  return;
}

function Activity() {
  const data = [
    {
      id: 1,
      image: "/voli0.jpg",
      name: "Bermain Bola Voli",
      description:
        "Rutin bermain voli di lapangan tanah RT 03 setiap sore. Laki-laki dan perempuan berolahraga bersama hampir setiap hari, menguatkan tubuh dan mempererat hubungan sosial.",
      link: "/aktivitas-dukuh/bermain-bola-voli",
    },
    {
      id: 2,
      image: "/tpa0.jpg",
      name: "Pelaksanaan TPA",
      description:
        "Di Dusun Tegalrejo, terdapat sebuah kegiatan pendidikan agama yang sangat penting, yaitu Taman Pendidikan Al-Qur'an (TPA).",
      link: "/aktivitas-dukuh/pelaksanaan-tpa",
    },
    {
      id: 3,
      image: "/pkk0.jpg",
      name: "Kumpulan PKK",
      description:
        "Kegiatan Pemberdayaan dan Kesejahteraan Keluarga (PKK) di Dusun Tegalrejo merupakan salah satu program rutin yang dilaksanakan setiap bulan.",
      link: "/aktivitas-dukuh/kumpulan-pkk",
    },
    {
      id: 4,
      image: "/kumpulan-rt0.jpg",
      name: "Kumpulan RT",
      description:
        "Di Dusun Tegalrejo, terdapat empat Rukun Tetangga (RT). Salah satu kegiatan rutin yang dilakukan oleh warga di setiap RT adalah pertemuan bulanan yang diadakan secara bergilir.",
      link: "/aktivitas-dukuh/kumpulan-rt",
    },
    {
      id: 5,
      image: "/pemudadi0.jpg",
      name: "Kumpulan Pemuda-Pemudi",
      description:
        "Dusun Tegalrejo juga memiliki dua organisasi pemuda-pemudi yang aktif berkontribusi dalam kehidupan sosial dan budaya di dusun.",
      link: "/aktivitas-dukuh/kumpulan-pemuda-pemudi",
    },
    {
      id: 6,
      image: "/senam0.jpg",
      name: "Senam Bersama",
      description:
        "Di Dusun Tegalrejo, kebugaran dan kesehatan menjadi perhatian. Salah satu kegiatan yang rutin dilakukan untuk menjaga kesehatan dan kebugaran adalah senam.",
      link: "/aktivitas-dukuh/senam-bersama",
    },
    {
      id: 7,
      image: "/posyandu0.jpg",
      name: "Posyandu",
      description:
        "Di Dusun Tegalrejo, perhatian terhadap kesehatan masyarakat menjadi salah satu prioritas utama, terutama bagi kesehatan anak-anak dan balita.",
      link: "/aktivitas-dukuh/posyandu",
    },
    {
      id: 8,
      image: "/dasawisma0.jpg",
      name: "Dasawisma",
      description:
        "Di Dusun Tegalrejo, kegiatan dasawisma menjadi salah satu program unggulan yang berperan penting dalam menjaga kesejahteraan dan kebersamaan antarwarga.",
      link: "/aktivitas-dukuh/dasawisma",
    },
    {
      id: 9,
      image: "/kerjabakti0.jpg",
      name: "Kerja Bakti",
      description:
        "Di Dusun Tegalrejo, kerja bakti merupakan salah satu tradisi yang dijunjung tinggi dan dilakukan secara rutin oleh warga.",
      link: "/aktivitas-dukuh/kerja-bakti",
    },
    {
      id: 10,
      image: "/170.jpg",
      name: "Lomba 17 Agustus",
      description:
        "Di Dusun Tegalrejo, perayaan Hari Kemerdekaan 17 Agustus selalu disambut dengan penuh semangat dan antusiasme oleh seluruh warga",
      link: "/aktivitas-dukuh/lomba-17-agustus",
    },
    {
      id: 11,
      image: "/tirakatan0.jpg",
      name: "Malam Tirakatan",
      description:
        "Malam tirakatan di Dusun Tegalrejo merupakan tradisi tahunan yang selalu dinanti oleh warga.",
      link: "/aktivitas-dukuh/malam-tirakatan",
    },
    {
      id: 21,
      image: "/karawitan.jpg",
      name: "Karawitan",
      description:
        "Terdapat kebiasaan berlatih memainkan alat musik tradisional Jawa, yang dikenal sebagai gamelan atau karawitan.",
      link: "/aktivitas-dukuh/karawitan",
    },
  ];

  return (
    <>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <Image iLink={item.image} />
          <Heading.Three title={item.name} />
          <Paragraf sentence={item.description} />
          <Anchor aLink={item.link} aTarget="_self" aText="Selengkapnya..." />
        </div>
      ))}
    </>
  );
}

Card.Activity = Activity;

export default Card;

import Heading from "../../Element/Heading";
import Image from "../../Element/Image";
import Paragraf from "../../Element/Paragraf";
import Card from "../../Fragment/Card";
import Footer from "../../Fragment/Footer";
import Header from "../../Fragment/Header";

const Activity = () => {
  return <></>;
};

const Main = function () {
  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div
          className="item item-3"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Card.Activity />
        </div>
        <div
          className="item item-4"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const VolleyBall = () => {
  const images = [
    {
      id: 1,
      url: "/voli.jpg",
    },
    {
      id: 2,
      url: "/voli2.jpg",
    },
    {
      id: 3,
      url: "/voli3.jpg",
    },
    {
      id: 4,
      url: "/voli4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/voli0.jpg" />
          </span>
          <Heading.Two title="Bermain Bola Voli" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Masyarakat di Dusun Tegalrejo, terutama yang berusia 11 hingga 29 tahun, memiliki kebiasaan bermain bola voli bersama-sama. Setiap sore, mereka berkumpul di lapangan voli yang terletak di kawasan RT 03. Lapangan ini memiliki alas tanah yang sederhana, tetapi tidak mengurangi semangat mereka dalam berolahraga. Kegiatan bola voli ini tidak hanya diikuti oleh laki-laki, tetapi juga oleh perempuan, menciptakan suasana yang inklusif dan penuh keceriaan. Bermain bola voli telah menjadi bagian dari rutinitas harian mereka. Hampir setiap hari, remaja dan orang dewasa berkumpul di lapangan voli untuk berolahraga bersama. Kegiatan ini tidak hanya memberikan manfaat fisik, tetapi juga mempererat hubungan sosial di antara warga dusun. Mereka saling mendukung dan bekerja sama, menciptakan ikatan yang kuat di antara mereka." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Lapangan voli di RT 03 selalu ramai dengan suara tawa dan semangat para pemain. Mereka bermain dengan antusias, terkadang disaksikan oleh warga lain yang turut menikmati suasana sore yang cerah. Bagi mereka, bermain bola voli bukan hanya sekadar olahraga, tetapi juga sarana untuk melepaskan penat setelah seharian beraktivitas. Anak-anak, remaja, dan orang dewasa, semuanya bersatu dalam kebersamaan dan semangat olahraga." />
            <Paragraf sentence="Kegiatan ini juga menjadi ajang untuk mengajarkan nilai-nilai sportifitas, kerjasama tim, dan semangat pantang menyerah kepada generasi muda. Dengan adanya kegiatan rutin seperti ini, Dusun Tegalrejo menjadi lebih hidup dan harmonis. Warga dusun dapat merasakan manfaat dari olahraga yang tidak hanya menyehatkan tubuh, tetapi juga menyehatkan jiwa dan mempererat rasa kebersamaan di antara mereka. Bola voli telah menjadi bagian penting dari kehidupan sehari-hari di Dusun Tegalrejo, menciptakan kenangan indah dan kebersamaan yang erat di antara warganya." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const DoingTPA = () => {
  const images = [
    {
      id: 1,
      url: "/tpa.jpg",
    },
    {
      id: 2,
      url: "/tpa2.jpg",
    },
    {
      id: 3,
      url: "/tpa3.jpg",
    },
    {
      id: 4,
      url: "/tpa4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/tpa0.jpg" />
          </span>
          <Heading.Two title="Pelaksanaan TPA" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, terdapat sebuah kegiatan pendidikan agama yang sangat penting, yaitu Taman Pendidikan Al-Qur'an (TPA). TPA ini dilaksanakan di Masjid Al-Hidayah, yang merupakan pusat kegiatan keagamaan di dusun tersebut. Setiap minggunya, pada hari Senin, Kamis, dan Sabtu, masjid ini dipenuhi oleh anak-anak yang antusias untuk belajar mengaji. Anak-anak yang mengikuti TPA ini berasal dari berbagai usia, mulai dari 3 hingga 13 tahun. Mereka datang dengan semangat yang tinggi untuk memperdalam ilmu agama, khususnya dalam membaca Iqro' dan Al-Qur'an. Bagi anak-anak yang masih pemula, mereka diajarkan membaca Iqro' sebagai dasar untuk memahami huruf-huruf dan bacaan dalam Al-Qur'an. Sementara itu, anak-anak yang sudah lebih mahir, melanjutkan pembelajaran mereka dengan membaca Al-Qur'an dan memperbaiki tajwid serta pelafalannya." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Kegiatan TPA di Dusun Tegalrejo ini tidak hanya menjadi wadah untuk meningkatkan kemampuan membaca Al-Qur'an, tetapi juga menjadi ajang untuk mempererat silaturahmi antar anak-anak. Mereka belajar bersama, saling membantu, dan menjalin persahabatan yang kuat di antara mereka. Para orang tua pun sangat mendukung kegiatan ini, karena mereka menyadari pentingnya pendidikan agama dalam membentuk karakter anak-anak sejak dini." />
            <Paragraf sentence="Selain itu, kehadiran TPA ini juga menjadi salah satu upaya masyarakat Dusun Tegalrejo dalam melestarikan nilai-nilai agama dan meneruskan tradisi membaca Al-Qur'an kepada generasi muda. Dengan adanya kegiatan ini, diharapkan anak-anak di Dusun Tegalrejo tidak hanya cerdas dalam ilmu pengetahuan umum, tetapi juga memiliki dasar agama yang kuat sebagai bekal dalam kehidupan mereka di masa depan." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const GatheringPKK = () => {
  const images = [
    {
      id: 1,
      url: "/pkk.jpg",
    },
    {
      id: 2,
      url: "/pkk3.jpg",
    },
    {
      id: 3,
      url: "/pkk2.jpg",
    },
    {
      id: 4,
      url: "/pkk4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/pkk0.jpg" />
          </span>
          <Heading.Two title="Kumpulan PKK" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Kegiatan Pemberdayaan dan Kesejahteraan Keluarga (PKK) di Dusun Tegalrejo merupakan salah satu program rutin yang dilaksanakan setiap bulan. Pertemuan ini biasanya diadakan sekali dalam sebulan, menjadi wadah bagi para ibu-ibu untuk berkumpul, berdiskusi, dan saling berbagi pengalaman serta pengetahuan seputar kehidupan keluarga. Pertemuan PKK ini selalu dinanti-nantikan oleh para anggotanya, karena memberikan kesempatan untuk mempererat hubungan antar keluarga dan meningkatkan kualitas kehidupan keluarga secara keseluruhan. Diskusi yang dilakukan dalam pertemuan PKK sangat beragam dan selalu mengangkat topik-topik penting yang relevan dengan kehidupan sehari-hari. Misalnya, ada sosialisasi yang bertujuan untuk meningkatkan standar atau kualitas keluarga, seperti cara mendidik anak, manajemen keuangan keluarga, kesehatan ibu dan anak, hingga pentingnya menjaga kebersihan lingkungan rumah. Para peserta juga aktif memberikan ide dan solusi untuk mengatasi berbagai permasalahan yang mungkin dihadapi dalam keluarga, menjadikan diskusi ini sangat bermanfaat dan aplikatif." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Selain diskusi yang informatif, pertemuan PKK juga diwarnai dengan kegiatan arisan yang menambah semangat dan keakraban di antara para anggotanya. Arisan ini bukan hanya sekadar ajang mengumpulkan dana, tetapi juga menjadi momen untuk saling memberikan dukungan, baik secara materi maupun moril. Dengan adanya arisan, hubungan antar anggota PKK semakin erat, menciptakan rasa solidaritas dan kebersamaan yang kuat di tengah masyarakat." />
            <Paragraf sentence="Tak hanya itu, PKK juga memiliki aktivitas yang tak kalah menarik, yaitu latihan bernyanyi lagu-lagu khas PKK. Lagu-lagu seperti Mars PKK seringkali dinyanyikan dalam berbagai lomba atau acara desa, sehingga latihan ini menjadi bagian penting dari persiapan mereka. Latihan bernyanyi ini tidak hanya melatih kekompakan, tetapi juga menumbuhkan rasa bangga dan cinta terhadap organisasi PKK itu sendiri." />
            <Paragraf sentence="Dengan berbagai aktivitas yang dilakukan, PKK di Dusun Tegalrejo bukan hanya sekadar perkumpulan ibu-ibu, tetapi telah menjadi pilar penting dalam mendukung dan memajukan kesejahteraan keluarga di dusun tersebut. Kegiatan-kegiatan ini secara langsung maupun tidak langsung memberikan dampak positif bagi peningkatan kualitas hidup masyarakat dan menciptakan lingkungan yang harmonis dan sejahtera." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const GatheringRT = () => {
  const images = [
    {
      id: 1,
      url: "/kumpulan-rt.jpg",
    },
    {
      id: 2,
      url: "/kumpulan-rt2.jpg",
    },
    {
      id: 3,
      url: "/kumpulan-rt3.jpg",
    },
    {
      id: 4,
      url: "/kumpulan-rt4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/kumpulan-rt0.jpg" />
          </span>
          <Heading.Two title="Kumpulan RT" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, terdapat empat Rukun Tetangga (RT) yang masing-masing diberi nomor dari RT 1 hingga RT 4. Setiap RT memiliki struktur organisasi yang rapi dan dipimpin oleh seorang ketua RT yang bertanggung jawab untuk memfasilitasi berbagai kegiatan dan urusan warga di wilayahnya. Salah satu kegiatan rutin yang dilakukan oleh warga di setiap RT adalah pertemuan bulanan yang diadakan secara bergilir." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Dalam satu bulan, terdapat empat pekan, dan setiap pekannya diisi oleh pertemuan dari masing-masing RT. Pertemuan ini biasanya dilakukan pada akhir pekan, sehingga warga yang bekerja atau memiliki kesibukan di hari kerja dapat ikut serta. Pada pertemuan ini, warga membahas berbagai topik yang berkaitan dengan kehidupan bermasyarakat, seperti masalah lingkungan, keamanan, hingga rencana kegiatan sosial yang akan dilaksanakan. Selain itu, pertemuan ini juga menjadi ajang bagi warga untuk mempererat hubungan sosial dan kebersamaan di antara mereka." />
            <Paragraf sentence="Selain diskusi dan koordinasi, pertemuan bulanan ini juga disertai dengan kegiatan arisan atau jimpitan. Arisan adalah sebuah tradisi di mana setiap warga memberikan sejumlah uang yang nantinya akan diundi untuk satu orang pemenang pada setiap pertemuan. Sementara itu, jimpitan adalah kegiatan pengumpulan dana secara sukarela oleh warga, yang biasanya digunakan untuk kebutuhan bersama, seperti perbaikan fasilitas umum atau kegiatan sosial di dusun. Kedua kegiatan ini tidak hanya bertujuan untuk mengumpulkan dana, tetapi juga memperkuat ikatan solidaritas dan gotong royong di antara warga Dusun Tegalrejo." />
            <Paragraf sentence="Dengan adanya pertemuan bulanan ini, RT di Dusun Tegalrejo mampu menjaga keharmonisan dan kerukunan di lingkungan mereka. Setiap warga memiliki kesempatan untuk berpartisipasi aktif dalam kegiatan yang bermanfaat, sekaligus menjalin hubungan yang lebih akrab dengan sesama tetangga. Tradisi ini telah menjadi bagian penting dari kehidupan sosial di Dusun Tegalrejo, menunjukkan betapa pentingnya kebersamaan dalam menjaga dan membangun komunitas yang kuat." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const GatheringYoungest = () => {
  const images = [
    {
      id: 1,
      url: "/pemudadi.jpg",
    },
    {
      id: 2,
      url: "/pemudadi2.jpg",
    },
    {
      id: 3,
      url: "/pemudadi3.jpg",
    },
    {
      id: 4,
      url: "/pemudadi4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/blank.jpg" />
          </span>
          <Heading.Two title="Kumpulan Pemuda-Pemudi" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Selain struktur RT yang solid, Dusun Tegalrejo juga memiliki dua organisasi pemuda-pemudi yang aktif berkontribusi dalam kehidupan sosial dan budaya di dusun. Organisasi pemuda-pemudi ini dibentuk dengan menggabungkan RT yang berdekatan untuk memudahkan koordinasi dan memperkuat solidaritas di antara para pemuda. RT 1 dan RT 2 bergabung menjadi satu organisasi, sedangkan RT 3 dan RT 4 juga membentuk organisasi yang serupa. Dengan demikian, terdapat dua badan organisasi pemuda-pemudi di Dusun Tegalrejo. Kedua organisasi ini biasanya mengadakan pertemuan rutin setiap bulan, yang sering kali digabung dengan kumpulan RT. Pada pertemuan tersebut, para pemuda-pemudi membahas berbagai program dan kegiatan yang akan mereka laksanakan, baik yang bersifat internal maupun yang berkaitan dengan kegiatan dusun secara keseluruhan. Kegiatan seperti ini tidak hanya bertujuan untuk mempererat hubungan di antara anggota organisasi, tetapi juga untuk merencanakan kontribusi mereka dalam kegiatan-kegiatan dusun." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Salah satu peran penting yang diemban oleh organisasi pemuda-pemudi ini adalah keterlibatan mereka dalam acara-acara besar di dusun, seperti perayaan Hari Kemerdekaan pada 17 Agustus dan malam tirakatan menjelang Hari Kemerdekaan. Dalam perayaan 17 Agustus, para pemuda-pemudi berperan aktif dalam berbagai kegiatan, mulai dari lomba-lomba tradisional hingga persiapan upacara dan acara hiburan. Sementara itu, pada malam tirakatan, mereka membantu dalam penyelenggaraan acara doa bersama dan refleksi, yang menjadi momen penting untuk memperkuat rasa kebangsaan dan kebersamaan di antara warga Dusun Tegalrejo." />
            <Paragraf sentence="Keberadaan organisasi pemuda-pemudi ini sangat penting dalam menjaga semangat gotong royong dan kebersamaan di Dusun Tegalrejo. Dengan keterlibatan aktif mereka, kegiatan-kegiatan dusun dapat berjalan dengan lancar dan meriah, serta mampu memperkuat ikatan sosial di antara seluruh lapisan masyarakat." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const Gymnastics = () => {
  const images = [
    {
      id: 1,
      url: "/senam.jpg",
    },
    {
      id: 2,
      url: "/senam3.jpg",
    },
    {
      id: 3,
      url: "/senam2.jpg",
    },
    {
      id: 4,
      url: "/senam4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/senam0.jpg" />
          </span>
          <Heading.Two title="Senam Bersama" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, kebugaran dan kesehatan menjadi perhatian utama bagi para ibu-ibu. Salah satu kegiatan yang rutin dilakukan untuk menjaga kesehatan dan kebugaran adalah senam. Setiap pekan, ibu-ibu di dusun ini berkumpul di balai desa atau lapangan terbuka untuk melakukan senam bersama. Kegiatan ini tidak hanya bertujuan untuk menjaga kesehatan fisik, tetapi juga menjadi ajang sosial yang mempererat hubungan antarwarga." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Senam di Dusun Tegalrejo biasanya diadakan pada pagi hari, ketika udara masih segar dan suasana lingkungan mendukung untuk berolahraga. Ibu-ibu yang berpartisipasi dalam kegiatan ini datang dengan penuh semangat, membawa matras atau peralatan sederhana lainnya. Gerakan senam yang dilakukan bervariasi, mulai dari senam aerobik, zumba, hingga senam sehat lansia yang disesuaikan dengan kebutuhan dan kemampuan peserta. Dipandu oleh instruktur lokal yang berpengalaman, senam ini diiringi dengan musik energik yang menambah semangat dan keceriaan." />
            <Paragraf sentence="Selain manfaat fisik, kegiatan senam ini juga memiliki dampak positif secara sosial. Melalui senam bersama, ibu-ibu di Dusun Tegalrejo dapat saling bertukar cerita dan pengalaman, membangun kebersamaan, serta mempererat tali silaturahmi. Kegiatan ini juga menjadi kesempatan bagi mereka untuk mengatasi stres dan menikmati waktu bersama di luar rutinitas harian mereka." />
            <Paragraf sentence="Kegiatan senam ini telah menjadi bagian penting dari kehidupan sehari-hari di Dusun Tegalrejo. Dengan konsistensi dan antusiasme yang tinggi dari para pesertanya, senam rutin ini tidak hanya membantu menjaga kesehatan fisik, tetapi juga memberikan dampak positif bagi kesejahteraan mental dan emosional para ibu-ibu. Dukungan dari warga dan pemerintah desa juga semakin memperkuat keberlanjutan program ini, sehingga senam rutin dapat terus dilaksanakan dan dinikmati oleh lebih banyak warga di masa mendatang." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const Posyandu = () => {
  const images = [
    {
      id: 1,
      url: "/posyandu.jpg",
    },
    {
      id: 2,
      url: "/posyandu2.jpg",
    },
    {
      id: 3,
      url: "/posyandu3.jpg",
    },
    {
      id: 4,
      url: "/posyandu4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/posyandu0.jpg" />
          </span>
          <Heading.Two title="Posyandu" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, perhatian terhadap kesehatan masyarakat menjadi salah satu prioritas utama, terutama bagi kesehatan anak-anak dan balita. Salah satu program kesehatan yang rutin dijalankan adalah imunisasi bagi balita. Program ini bertujuan untuk memastikan bahwa setiap anak di dusun mendapatkan perlindungan terhadap berbagai penyakit yang dapat dicegah melalui imunisasi, seperti polio, campak, dan penyakit lainnya. Imunisasi bagi balita ini dilaksanakan melalui kegiatan posyandu, yang diadakan secara rutin setiap bulan. Posyandu di Dusun Tegalrejo biasanya berlangsung satu hingga dua kali dalam sebulan, tergantung pada kebutuhan dan jadwal yang telah disepakati bersama. Kegiatan ini menjadi ajang penting bagi para ibu untuk membawa anak-anak mereka mendapatkan imunisasi yang diperlukan, sekaligus mendapatkan informasi seputar kesehatan anak dan gizi yang tepat. Selain imunisasi, posyandu juga menjadi tempat untuk memantau tumbuh kembang anak secara berkala." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Posyandu di Dusun Tegalrejo tidak hanya mengandalkan sumber daya lokal, tetapi juga bekerja sama erat dengan Puskesmas setempat. Tenaga medis dari Puskesmas turut hadir dalam setiap kegiatan posyandu untuk memberikan pelayanan kesehatan, seperti imunisasi, pemeriksaan kesehatan, serta memberikan penyuluhan tentang pentingnya menjaga kesehatan balita. Kerjasama ini memastikan bahwa program kesehatan di dusun berjalan sesuai dengan standar medis yang tepat dan memberikan manfaat maksimal bagi warga." />
            <Paragraf sentence="Program kesehatan melalui posyandu ini sangat penting bagi masyarakat Dusun Tegalrejo, terutama dalam upaya pencegahan penyakit sejak dini. Dengan adanya kegiatan posyandu yang rutin dan terorganisir, para orang tua merasa lebih tenang karena kesehatan anak-anak mereka terpantau dengan baik. Selain itu, melalui kerjasama yang solid dengan Puskesmas, kualitas pelayanan kesehatan di dusun terus meningkat, yang pada akhirnya berkontribusi pada terciptanya generasi yang sehat dan kuat di masa depan." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const Dasawisma = () => {
  const images = [
    {
      id: 1,
      url: "/dasawisma.jpg",
    },
    {
      id: 2,
      url: "/dasawisma3.jpg",
    },
    {
      id: 3,
      url: "/dasawisma2.jpg",
    },
    {
      id: 4,
      url: "/dasawisma4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/dasawisma0.jpg" />
          </span>
          <Heading.Two title="Dasawisma" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, kegiatan dasawisma menjadi salah satu program unggulan yang berperan penting dalam menjaga kesejahteraan dan kebersamaan antarwarga. Dasawisma di dusun ini terdiri dari beberapa kelompok kecil yang beranggotakan 10 hingga 20 rumah tangga yang berada dalam satu wilayah RT. Kelompok-kelompok ini dibentuk untuk memfasilitasi berbagai kegiatan sosial, kesehatan, dan lingkungan di tingkat masyarakat." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Setiap kelompok dasawisma di Dusun Tegalrejo memiliki agenda kegiatan yang beragam, mulai dari pendataan penduduk, pemantauan kesehatan ibu dan anak, hingga penyuluhan tentang pentingnya menjaga kebersihan lingkungan. Salah satu kegiatan rutin yang dilakukan oleh kelompok dasawisma adalah kunjungan ke setiap rumah tangga untuk memberikan edukasi mengenai pola hidup sehat, seperti pentingnya menjaga kebersihan rumah, pengelolaan sampah, serta pemantauan kesehatan balita dan lansia. Kegiatan ini bertujuan untuk memastikan bahwa setiap keluarga mendapatkan informasi yang tepat dan dapat menjaga kesehatan serta kebersihan lingkungan mereka." />
            <Paragraf sentence="Selain fokus pada kesehatan dan kebersihan, dasawisma di Dusun Tegalrejo juga aktif dalam kegiatan ekonomi mikro. Beberapa kelompok dasawisma mengelola program arisan atau koperasi kecil yang bertujuan untuk membantu meningkatkan kesejahteraan anggotanya. Melalui kegiatan ini, para anggota dasawisma dapat saling membantu dalam memenuhi kebutuhan ekonomi sehari-hari, serta mempererat hubungan sosial di antara mereka." />
            <Paragraf sentence="Kegiatan dasawisma di Dusun Tegalrejo juga tidak lepas dari dukungan pemerintah desa dan partisipasi aktif warga. Pemerintah desa sering kali bekerja sama dengan kelompok dasawisma untuk menyukseskan program-program pemerintah, seperti program keluarga berencana (KB), posyandu, dan program peningkatan kualitas hidup masyarakat. Dengan adanya kerjasama yang baik antara pemerintah desa dan warga, kegiatan dasawisma menjadi lebih efektif dan mampu memberikan dampak positif yang nyata bagi seluruh masyarakat di Dusun Tegalrejo." />
            <Paragraf sentence="Secara keseluruhan, kegiatan dasawisma di Dusun Tegalrejo tidak hanya membantu menjaga kesehatan dan kesejahteraan warga, tetapi juga memperkuat ikatan sosial dan rasa kebersamaan di antara mereka. Program ini menjadi salah satu contoh nyata bagaimana gotong royong dan solidaritas dapat diwujudkan melalui kegiatan-kegiatan yang sederhana namun sangat bermanfaat bagi komunitas." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const KerjaBakti = () => {
  const images = [
    {
      id: 1,
      url: "/kerjabakti.jpg",
    },
    {
      id: 2,
      url: "/kerjabakti2.jpg",
    },
    {
      id: 3,
      url: "/kerjabakti3.jpg",
    },
    {
      id: 4,
      url: "/kerjabakti4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/kerjabakti0.jpg" />
          </span>
          <Heading.Two title="Kerja Bakti" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, kerja bakti merupakan salah satu tradisi yang dijunjung tinggi dan dilakukan secara rutin oleh warga. Kegiatan ini tidak hanya sekadar membersihkan lingkungan, tetapi juga menjadi simbol gotong royong dan kebersamaan yang kuat di antara masyarakat. Dalam satu tahun, kerja bakti di Dusun Tegalrejo diadakan beberapa kali, dengan waktu yang paling pasti adalah menjelang perayaan Hari Kemerdekaan Indonesia. Senam di Dusun Tegalrejo biasanya diadakan pada pagi hari, ketika udara masih segar dan suasana lingkungan mendukung untuk berolahraga. Ibu-ibu yang berpartisipasi dalam kegiatan ini datang dengan penuh semangat, membawa matras atau peralatan sederhana lainnya. Gerakan senam yang dilakukan bervariasi, mulai dari senam aerobik, zumba, hingga senam sehat lansia yang disesuaikan dengan kebutuhan dan kemampuan peserta. Dipandu oleh instruktur lokal yang berpengalaman, senam ini diiringi dengan musik energik yang menambah semangat dan keceriaan." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Selain manfaat fisik, kegiatan senam ini juga memiliki dampak positif secara sosial. Melalui senam bersama, ibu-ibu di Dusun Tegalrejo dapat saling bertukar cerita dan pengalaman, membangun kebersamaan, serta mempererat tali silaturahmi. Kegiatan ini juga menjadi kesempatan bagi mereka untuk mengatasi stres dan menikmati waktu bersama di luar rutinitas harian mereka." />
            <Paragraf sentence="Kegiatan senam ini telah menjadi bagian penting dari kehidupan sehari-hari di Dusun Tegalrejo. Dengan konsistensi dan antusiasme yang tinggi dari para pesertanya, senam rutin ini tidak hanya membantu menjaga kesehatan fisik, tetapi juga memberikan dampak positif bagi kesejahteraan mental dan emosional para ibu-ibu. Dukungan dari warga dan pemerintah desa juga semakin memperkuat keberlanjutan program ini, sehingga senam rutin dapat terus dilaksanakan dan dinikmati oleh lebih banyak warga di masa mendatang." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const Lomba17Agustus = () => {
  const images = [
    {
      id: 1,
      url: "/17.jpg",
    },
    {
      id: 2,
      url: "/173.jpg",
    },
    {
      id: 3,
      url: "/174.jpg",
    },
    {
      id: 4,
      url: "/172.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/170.jpg" />
          </span>
          <Heading.Two title="Lomba 17 Agustus" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di Dusun Tegalrejo, perayaan Hari Kemerdekaan 17 Agustus selalu disambut dengan penuh semangat dan antusiasme oleh seluruh warga. Setiap tahunnya, menjelang hari yang bersejarah ini, berbagai kegiatan rutin diselenggarakan untuk memeriahkan suasana dan menumbuhkan rasa cinta tanah air di hati setiap warga. Salah satu kegiatan yang paling dinantikan adalah perlombaan-perlombaan yang melibatkan seluruh lapisan masyarakat, mulai dari anak-anak, remaja, orang dewasa, hingga lansia." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Perlombaan yang diadakan selama perayaan Hari Kemerdekaan ini sangat beragam dan disesuaikan dengan usia serta kemampuan peserta. Bagi anak-anak, perlombaan seperti balap karung, makan kerupuk, dan lari kelereng menjadi favorit yang selalu meriah dengan sorak-sorai para penonton. Perlombaan ini tidak hanya menguji ketangkasan, tetapi juga mengajarkan anak-anak tentang sportivitas dan kerja sama. Suasana penuh kegembiraan dan tawa selalu mengiringi setiap pertandingan, menjadikan momen ini sebagai kenangan indah bagi mereka." />
            <Paragraf
              sentence="Bagi remaja, perlombaan yang diadakan biasanya lebih menantang dan kompetitif. Lomba tarik tambang, panjat pinang, serta futsal atau voli antar-RT adalah beberapa contoh kegiatan yang sangat diminati. Remaja di Dusun Tegalrejo selalu menunjukkan semangat yang luar biasa dalam mengikuti perlombaan ini, bersaing dengan sehat untuk memperebutkan hadiah dan kebanggaan bagi kelompok mereka. Kegiatan ini juga menjadi ajang untuk menunjukkan kekompakan dan solidaritas di antara para remaja, memperkuat ikatan persahabatan yang terjalin di dalam dusun.
            Orang dewasa dan lansia juga tidak ketinggalan dalam memeriahkan perlombaan 17 Agustus. Bagi mereka, lomba yang diadakan lebih bersifat rekreatif dan mengutamakan kebersamaan. Lomba-lomba seperti jalan santai, lomba memasak, dan lomba catur menjadi ajang yang seru dan menghibur. Meski bersifat santai, perlombaan ini tetap diikuti dengan semangat yang tak kalah dari para pemuda, menunjukkan bahwa semangat kemerdekaan hidup dalam setiap generasi. Bagi lansia, perlombaan ini juga menjadi kesempatan untuk tetap aktif dan terlibat dalam kegiatan sosial di lingkungan mereka."
            />
            <Paragraf sentence="Setelah seluruh perlombaan selesai, warga Dusun Tegalrejo biasanya berkumpul untuk menyaksikan upacara penutupan dan pembagian hadiah. Momen ini menjadi penutup yang manis dari rangkaian kegiatan yang telah dilaksanakan, sekaligus menjadi waktu untuk merayakan kebersamaan dan kerja keras yang telah mereka lakukan bersama. Hadiah yang diberikan mungkin sederhana, tetapi kebahagiaan dan rasa bangga yang dirasakan oleh para pemenang dan peserta adalah hal yang tak ternilai." />
            <Paragraf sentence="Kegiatan perlombaan setiap tahunnya di Dusun Tegalrejo menjelang Hari Kemerdekaan ini bukan hanya sekadar hiburan. Lebih dari itu, perlombaan ini menjadi sarana untuk memperkuat rasa persatuan dan kesatuan di antara warga, menumbuhkan rasa cinta tanah air, dan melestarikan nilai-nilai kebersamaan yang telah menjadi bagian penting dari identitas masyarakat Dusun Tegalrejo. Perayaan ini selalu dinantikan oleh seluruh warga, sebagai momen untuk bersama-sama merayakan kemerdekaan dengan penuh suka cita dan semangat gotong royong." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const Tirakatan = () => {
  const images = [
    {
      id: 1,
      url: "/tirakatan.jpg",
    },
    {
      id: 2,
      url: "/tirakatan2.jpg",
    },
    {
      id: 3,
      url: "/tirakatan3.jpg",
    },
    {
      id: 4,
      url: "/tirakatan4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/tirakatan0.jpg" />
          </span>
          <Heading.Two title="Malam Tirakatan" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Malam tirakatan di Dusun Tegalrejo merupakan tradisi tahunan yang selalu dinanti oleh warga. Acara ini biasanya digelar pada malam sebelum peringatan Hari Kemerdekaan Indonesia. Sebagai momen penting dalam menjaga kebersamaan, malam tirakatan menjadi kesempatan bagi warga untuk berkumpul dan merenungkan makna kemerdekaan. Acara diawali dengan doa bersama dan pengajian, yang dihadiri oleh berbagai kalangan usia, mulai dari anak-anak hingga orang tua. Kegiatan ini tidak hanya memperkuat ikatan spiritual, tetapi juga menjadi sarana untuk saling mendoakan kesejahteraan seluruh warga dusun." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Setelah pengajian, suasana malam tirakatan semakin meriah dengan digelarnya pentas seni. Anak-anak, remaja, dan bahkan orang dewasa turut berpartisipasi dalam menampilkan berbagai pertunjukan, seperti tari-tarian tradisional, drama, dan musik. Pentas seni ini menjadi ajang bagi warga untuk menunjukkan bakat mereka sekaligus melestarikan kebudayaan lokal. Tidak jarang, ada juga penampilan musik rakyat yang membawa suasana semakin hidup, dengan alunan gamelan atau alat musik tradisional lainnya yang menyemarakkan malam." />
            <Paragraf sentence="Di samping hiburan, malam tirakatan juga menjadi momen penting dalam memperkuat rasa persaudaraan antarwarga. Dengan berkumpul bersama, warga Tegalrejo dapat saling bertukar cerita, berbagi pengalaman, dan mempererat tali silaturahmi. Kegiatan ini menunjukkan semangat gotong royong dan kebersamaan yang selalu dijaga oleh masyarakat Tegalrejo. Malam tirakatan bukan hanya sekadar tradisi, tetapi juga cerminan dari nilai-nilai kebangsaan dan kebersamaan yang terus hidup di dusun ini." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

const Karawitan = () => {
  const images = [
    {
      id: 1,
      url: "/karawitan2.jpg",
    },
    {
      id: 2,
      url: "/karawitan3.jpg",
    },
    {
      id: 3,
      url: "/karawitan4.jpg",
    },
    {
      id: 4,
      url: "/karawitan5.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section id="activity" className="activity">
        <div className="item item-1">
          <Image iLink="/rt12Gang.png" />
        </div>
        <div
          className="item item-2"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Heading.Two title="Kegiatan Masyarakat Dukuh" />
          <Paragraf sentence="Dukuh Tegalrejo merupakan komunitas yang dinamis di mana penduduknya aktif berpartisipasi dalam berbagai kegiatan rutin. Dalam kurun waktu satu pekan, satu bulan, dan satu tahun, anak-anak, remaja, dan orang dewasa di Tegalrejo memiliki beragam aktivitas yang mencerminkan kehidupan sosial dan budaya mereka. Kegiatan ini tidak hanya mencakup rutinitas sehari-hari tetapi juga perayaan-perayaan penting yang memperkuat ikatan komunitas. Mari kita telusuri lebih dalam tentang aktivitas rutin yang menjadi bagian dari kehidupan sehari-hari di Dukuh Tegalrejo." />
        </div>
        <div className="item item-3 item-3-1">
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Image iLink="/karawitan.jpg" />
          </span>
          <Heading.Two title="Malam Tirakatan" />
          <span
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Di dusun Tegalrejo, terdapat kebiasaan berlatih memainkan alat musik tradisional Jawa, yang dikenal sebagai gamelan atau karawitan. Latihan ini sebagian besar dilakukan oleh ibu-ibu, sementara hanya beberapa bapak-bapak yang biasanya terlihat sebagai penonton. Sesi latihan ini biasanya diadakan sekali seminggu, meskipun ada kalanya dilakukan dua kali." />
          </span>
          <div className="images">
            {images.map((item) => (
              <Image key={item.id} iLink={item.url} />
            ))}
          </div>
          <div
            className="sentences"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <Paragraf sentence="Kegiatan budaya ini tidak hanya berfungsi sebagai hiburan, tetapi juga sebagai cara untuk melestarikan warisan musik yang kaya dari daerah tersebut. Para ibu di komunitas ini menyisihkan waktu untuk menguasai ritme dan melodi gamelan yang rumit, berkontribusi pada kelangsungan seni tradisional ini. Kehadiran penonton laki-laki menunjukkan dukungan sosial dari komunitas, menekankan pentingnya latihan ini dalam kehidupan sosial Tegalrejo." />
            <Paragraf sentence="Selain itu, frekuensi sesi latihan mencerminkan komitmen masyarakat untuk mempertahankan tradisi ini. Meskipun sekali seminggu adalah jadwal standar, peningkatan menjadi dua kali seminggu dari waktu ke waktu menunjukkan pendekatan yang adaptif, mungkin sebagai persiapan untuk pertunjukan atau acara budaya. Fleksibilitas ini memastikan bahwa tradisi ini tetap hidup dan relevan dalam kehidupan para warga dusun." />
          </div>
        </div>
        <div className="item item-4">
          <Paragraf sentence="Kehidupan di Dusun Tegalrejo mencerminkan kekayaan budaya dan kebersamaan yang kuat di antara warganya. Dengan berbagai aktivitas rutin yang mencakup anak-anak hingga orang dewasa, baik mingguan, bulanan, maupun tahunan, masyarakat Tegalrejo menunjukkan semangat gotong royong dan komitmen terhadap nilai-nilai tradisional. Setiap kegiatan bukan hanya sekadar rutinitas, tetapi juga menjadi momen untuk mempererat tali silaturahmi dan menjaga kelestarian budaya lokal. Dusun Tegalrejo benar-benar mencerminkan semangat kebersamaan dan kesederhanaan yang menjadi ciri khas desa-desa di Indonesia." />
        </div>
      </section>
      <Footer />
    </>
  );
};

Activity.Main = Main;
Activity.VolleyBall = VolleyBall;
Activity.DoingTPA = DoingTPA;
Activity.GatheringPKK = GatheringPKK;
Activity.GatheringRT = GatheringRT;
Activity.GatheringYoungest = GatheringYoungest;
Activity.Gymnastics = Gymnastics;
Activity.Posyandu = Posyandu;
Activity.Dasawisma = Dasawisma;
Activity.KerjaBakti = KerjaBakti;
Activity.Lomba17Agustus = Lomba17Agustus;
Activity.Tirakatan = Tirakatan;
Activity.Karawitan = Karawitan;

export default Activity;

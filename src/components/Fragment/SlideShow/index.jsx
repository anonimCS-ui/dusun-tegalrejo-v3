import Heading from "../../Element/Heading";
import Paragraf from "../../Element/Paragraf";
import Image from "../../Element/Image";
import Icon from "../../Element/Icon";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useState, useEffect, useRef } from "react";

function SlideShow() {
  return <></>;
}

function One() {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = function (index) {
    let newSlide = activeSlide + index;
    if (newSlide >= data.length) {
      newSlide = 0;
    } else if (newSlide < 0) {
      newSlide = data.length - 1;
    }
    setActiveSlide(newSlide);
  };

  const data = [
    {
      id: 1,
      title: "Sejuknya Persaudaraan Tegalrejo.",
      description:
        "Tegalrejo dikenal dengan udara sejuk dan masyarakat yang menjunjung tinggi persaudaraan, menciptakan lingkungan yang nyaman dan penuh kedamaian.",
      image: "public/people4.png",
    },
    {
      id: 2,
      title: "Harmoni Kehidupan Tegalrejo.",
      description:
        "Kehidupan di Tegalrejo berjalan harmonis, dengan alam yang asri dan masyarakat yang saling menghormati, menjadikan dusun ini tempat yang damai.",
      image: "public/mrMuji.png",
    },
    {
      id: 3,
      title: "Kehangatan di Tengah Sejuknya Tegalrejo ",
      description:
        "Di balik sejuknya udara Tegalrejo, terdapat kehangatan dalam interaksi masyarakatnya yang selalu saling membantu dan menjaga kebersamaan.",
      image: "public/mrRamlan.png",
    },
    {
      id: 4,
      title: "Tegalrejo Ramah dan Bersahabat",
      description:
        "Tegalrejo adalah dusun yang dikenal dengan keramahan warganya, menciptakan lingkungan yang bersahabat dan menyambut setiap pendatang dengan tangan terbuka.",
      image: "public/people6.png",
    },
  ];

  return (
    <>
      <div className="slideShow">
        <div
          className="slides"
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-delay="0"
        >
          {data.map((item, index) => (
            <div
              className={`slide ${activeSlide === index ? "active" : ""}`}
              key={index}
            >
              <div className="row">
                <div className="col col-1">
                  <Heading.One title={item.title} />
                  <Paragraf sentence={item.description} />
                </div>
                <div className="col col-2">
                  <Image iLink={item.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="controller">
          <span
            onClick={() => changeSlide(-1)}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <Icon iconName={<IoIosArrowBack />} />
          </span>
          <span
            onClick={() => changeSlide(1)}
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <Icon iconName={<IoIosArrowForward />} />
          </span>
        </div>
      </div>
    </>
  );
}

function Two() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef(null);

  const images = [
    { id: 1, url: "public/kumpulan-rt2.jpg" },
    { id: 2, url: "public/senam2.jpg" },
    { id: 3, url: "public/pemudadi3.jpg" },
    { id: 4, url: "public/174.jpg" },
    { id: 5, url: "public/tpa2.jpg" },
    { id: 6, url: "public/voli3.jpg" },
    { id: 7, url: "public/pkk4.jpg" },
    { id: 8, url: "public/posyandu2.jpg" },
    { id: 9, url: "public/kerjabakti3.jpg" },
    { id: 10, url: "public/dasawisma4.jpg" },
  ];

  // Menggandakan list gambar untuk efek looping
  const doubledImages = images.concat(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Mengubah slide setiap 2 detik

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset posisi tanpa animasi ketika akhir slide tercapai
    if (activeIndex >= images.length) {
      setTimeout(() => {
        slideRef.current.style.transition = "none";
        setActiveIndex(0);
      }, 500); // Waktu harus sesuai dengan transition CSS
    } else {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [activeIndex, images.length]);

  return (
    <div className="slideShow">
      <div
        className="slides"
        ref={slideRef}
        style={{ transform: `translateX(-${activeIndex * 250}px)` }}
      >
        {doubledImages.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.url} alt={`Slide ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

SlideShow.One = One;
SlideShow.Two = Two;

export default SlideShow;

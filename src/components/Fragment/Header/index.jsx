import Icon from "../../Element/Icon";
import Image from "../../Element/Image";
import Anchor from "../../Element/Anchor";
import Button from "../../Element/Button";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Heading from "../../Element/Heading";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = function () {
    setNavbar(!navbar);
  };

  const data = [
    {
      id: 1,
      text: "Beranda",
      link: "/beranda",
    },
    {
      id: 2,
      text: "Tentang Dukuh",
      link: "/tentang-dukuh",
    },
    {
      id: 3,
      text: "Fasilitas Dukuh",
      link: "/fasilitas-dukuh",
    },
    {
      id: 4,
      text: "Perangkat Dukuh",
      link: "/perangkat-dukuh",
    },
    {
      id: 5,
      text: "Aktivitas Dukuh",
      link: "/aktivitas-dukuh",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <div className="row">
            <div
              className="col col-1"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="0"
            >
              <Heading.Three title="Dukuh" />
              <Heading.Four title="Tegalrejo" />
            </div>
            <div className={`col col-2 ${navbar ? "active" : ""}`}>
              {data.map((item) => (
                <Anchor
                  key={item.id}
                  aText={item.text}
                  aLink={item.link}
                  aTarget="_self"
                />
              ))}
            </div>
            <div
              className="col col-3"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <span
                className={`hamBtn ${navbar ? "active" : ""}`}
                onClick={handleNavbar}
              >
                <Icon iconName={<IoIosArrowDown />} />
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

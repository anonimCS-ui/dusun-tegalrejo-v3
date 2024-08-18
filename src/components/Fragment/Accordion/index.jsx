import { useState } from "react";
import Heading from "../../Element/Heading";
import Paragraf from "../../Element/Paragraf";

const Accordion = function () {
  const [indexActived, setIndexActived] = useState([]);

  const toggleAccordion = (index) => {
    const newIndexActived = [...indexActived];
    newIndexActived[index] = !newIndexActived[index];
    setIndexActived(newIndexActived);
  };

  const data = [
    {
      id: 1,
      up: "1) Presiden RI",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 2,
      up: "2) Gubernur DIY",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 3,
      up: "3) Bupati Gunungkidul",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 4,
      up: "4) Kepala Camat Gedangsari",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 5,
      up: "5) Kepala lurah Tegalrejo",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 6,
      up: "6) Kepala Dusun Tegalrejo",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 7,
      up: "7) Ketua Rukun Warga (RW)",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
    {
      id: 8,
      up: "8) Ketua Rukun Tetangga (RT)",
      down: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Suscipit iste at repellendus, dignissimos consectetur rem nihil autem alias obcaecati eveniet molestias. Rem ea numquam tempore error. Ducimus, numquam.",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-up" onClick={() => toggleAccordion(index)}>
            <Heading.Three title={item.up} />
          </div>
          <div
            className={`accordion-down ${indexActived[index] ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <Paragraf sentence={item.down} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;

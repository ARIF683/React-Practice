import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Data = [
  {
    id: 1,
    name: "Arif Alam",
    job: "WEB DEVELOPER",
  },
  {
    id: 2,
    name: "SHAHAZIM ALAM",
    job: "WEB DEVELOPER",
  },
  {
    id: 3,
    name: "DOD",
    job: "GRAPHIC DESIGNER",
  },
  {
    id: 4,
    name: "Badking",
    job: "GAME DEVELOPER",
  },
  {
    id: 5,
    name: "SHAHNOOR ALAM",
    job: "CA",
  },
];
const Project3 = () => {
  return (
    <>
      <h3>OUR REVIEWS</h3>
      <br></br>
      <Header />
    </>
  );
};
const Header = () => {
  const [index, setIndex] = useState(0);
  const { name, job } = Data[index];
  const checkNumber = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };
  const Left = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const Right = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    });
  };
  const RandomPerson = () => {
    let random = Math.floor(Math.random() * Data.length);
    if (random === index) {
      return index + 1;
    }
    setIndex(checkNumber(random));
  };
  return (
    <>
      <h2>{name}</h2>
      <h4>{job}</h4>
      <button onClick={Left}>
        <FaChevronLeft />
      </button>
      <button onClick={Right}>
        <FaChevronRight />
      </button>
      <button onClick={RandomPerson}>Random Review </button>
    </>
  );
};
export default Project3;

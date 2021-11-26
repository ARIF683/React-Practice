import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const Loading = () => {
  return <h3>Loading.....</h3>;
};
const Tour = ({ tour, NotInt }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {tour.map((person) => {
        const { id, name, image, price, info } = person;
        return (
          <div>
            <div>
              <img src={image} />
              <p>{readMore ? info : `${info.substring(0, 200)}....`}</p>
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Show More"}
              </button>
              <h3> {name}</h3>
              <h4>${price}</h4>
            </div>
            <button onClick={() => NotInt(id)}>Not Interested</button>
          </div>
        );
      })}
    </>
  );
};
const Project2 = () => {
  const [loading, setLoading] = useState(false);
  const [tour, setTour] = useState([]);
  const NotInt = (id) => {
    let remove = tour.filter((person) => person.id !== id);
    setTour(remove);
  };
  const ShowApi = async () => {
    try {
      const res = await fetch(url);
      setTour(await res.json());
      setLoading(false);
      console.log(setTour);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    ShowApi();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (tour.length === 0) {
    return (
      <>
        <h1>No Tour Left </h1>
        <button onClick={ShowApi}>Refresh </button>
      </>
    );
  }
  return <Tour tour={tour} NotInt={NotInt} />;
};

export default Project2;

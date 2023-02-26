import React from "react";
import styles from "./holidayArea.module.css";
import Router from "next/router";

type HolidayAreaType = {
  destination: string;
  date: string;
  price: number;
  duration: string;
  imgSrc: string;
  description: string;
  id: string;
};

const HolidayArea: React.FC<HolidayAreaType> = ({
  destination,
  date,
  price,
  duration,
  imgSrc,
  description,
  id,
}) => {
  const onClickHandler = () => {
    Router.push(`/holidayArea/${id}`);

    console.log(id);
  };

  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.image}
          alt="trip"
          src={
            "https://afar.brightspotcdn.com/dims4/default/43d3be9/2147483647/strip/false/crop/2160x1407+0+0/resize/1486x968!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fcd%2F82%2Fe5821197681c4d25c932a2ae069b%2Foriginal-road-trip.jpg"
          }
        />
      </div>
      <div className={styles.content}>
        <h5 className={styles.info}>{destination}</h5>
        <h6 className={styles.info}>{date}</h6>
        <h5 className={styles.info}>{price}</h5>
        <h6 className={styles.info}>{duration}</h6>
        <h6 className={styles.info}>{description}</h6>
      </div>
    </div>
  );
};

export default HolidayArea;

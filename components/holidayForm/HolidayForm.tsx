import React, { useState } from "react";
import Router from "next/router";
import styles from "./holidayForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

const HolidayForm: React.FC = () => {
  const [destination, setDestination] = useState();
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState();

  const onClickHandler = () => {
    console.log(destination, date, duration, price, imageUrl, description);

    const holidayData = {
      destination: destination,
      date: date,
      duration: duration,
      price: price,
      imgSrc: imageUrl,
      description: description,
    };

    axios.post(
      "https://63e521bcc04baebbcdb47b44.mockapi.io/holidays/holidays",
      holidayData
    );
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input
        onChange={setDestination}
        value={destination}
        placeholder="Destination"
      />
      <Input onChange={setDate} value={date} placeholder="Date" />
      <Input onChange={setDuration} value={duration} placeholder="Duration" />
      <Input onChange={setPrice} value={price} placeholder="Price" />
      <Input onChange={setImageUrl} value={imageUrl} placeholder="Image Url" />
      <Input
        onChange={setDescription}
        value={description}
        placeholder="Description"
      />

      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Publish" />
      </div>
    </div>
  );
};

export default HolidayForm;

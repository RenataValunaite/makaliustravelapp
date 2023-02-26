import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Holiday from "../components/holiday/Holiday";
import NavBar from "../components/navBar/NavBar";
import Button from "../components/button/Button";
import Router from "next/router";
import ActionArea from "../components/actionArea/ActionArea";

export default function Home(props: any) {
  const [holidays, setHolidays] = useState<any>(props.holidays);

  const [filter, setFilter] = useState<any>("");

  const onChangeFilterInputHander = (holidayValue: any) => {
    setFilter(holidayValue);
  };

  return (
    <div className={styles.container}>
      <NavBar title={"Makalius"} />

      <div className={styles.buttonWrapper}>
        <Button
          onClick={() => Router.push("/createHoliday")}
          text="Create Holiday"
        />
      </div>

      <div className={styles.holidaysWrapper}>
        {holidays.map((holiday: any) => {
          return (
            <Holiday
              imgSrc={holiday.tripImage}
              destination={holiday.destination}
              date={holiday.date}
              price={holiday.price}
              duration={holiday.duration}
              description={holiday.description}
              id={holiday._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(contex: any) {
  console.log("contex", contex);

  const response = await axios.get(
    "https://63e521bcc04baebbcdb47b44.mockapi.io/holidays/holidays"
  );

  return {
    props: {
      holidays: response.data,
    },
  };
}

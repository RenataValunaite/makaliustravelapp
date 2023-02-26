import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/navBar/NavBar";
import ActionArea from "../../components/actionArea/ActionArea";
import HolidayArea from "../../components/holidayArea/HolidayArea";
import styles from "./holiday.module.css";
import axios from "axios";

export default function HolidayPage({
  holiday: holidayAreaData,
  isJoinedHolidayArea,
}: any) {
  const [holidayArea, setHolidayArea] = useState<any>(holidayAreaData);
  const [isJoined, setJoined] = useState<any>(isJoinedHolidayArea);

  const holidayAreaId: any = "kj23i4i23u4gi23ug4324";

  const router = useRouter();

  const joinHolidayArea = async () => {
    const response = await axios.put(
      `https://63e521bcc04baebbcdb47b44.mockapi.io/holidays/holidays/join/${router.query.id}`,
      { data: { holidayAreaId: holidayAreaId } }
    );

    setJoined(true);
  };

  const leaveHolidayArea = async () => {
    const response = await axios.put(
      `https://63e521bcc04baebbcdb47b44.mockapi.io/holidays/holidays/leave/${router.query.id}`,
      { data: { holidayAreaId: holidayAreaId } }
    );

    setJoined(false);
  };

  return (
    <div>
      <NavBar title={"Makalius"} />

      {holidayAreaId && (
        <div className={styles.main}>
          <img className={styles.header} src={holidayAreaId.holidayImage} />

          <div className={styles.content}>
            <div className={styles.details}>
              <h2>City: {holidayAreaId.destination}</h2>
              <h5>Date: {holidayAreaId.date}</h5>
              <h5>Price: {holidayAreaId.price}</h5>
              <h5>Duration: {holidayAreaId.duration}</h5>
              <h5>Description: {holidayAreaId.description}</h5>
            </div>
            <div className={styles.actions}>
              <ActionArea
                isJoined={isJoined}
                onClick={() => {
                  if (!isJoined) {
                    joinHolidayArea();
                  } else {
                    leaveHolidayArea();
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const { data } = await axios.post(
    `https://63e521bcc04baebbcdb47b44.mockapi.io/holiday/[id]${ctx.query.id}`,
    {
      data: { holidayId: "kj23i4i23u4gi23ug4324" },
    }
  );

  return {
    props: {
      holiday: data.holiday,
      isJoinedHoliday: data.isJoinedHoliday,
    },
  };
}

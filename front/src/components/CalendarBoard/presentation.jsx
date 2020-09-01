// 
// CalendarBoardはカレンダー全体の構成や見た目を管理している
// 

import React, { useEffect } from "react";
import { GridList, Typography } from "@material-ui/core";

import CalendarElement from "../CalendarElements";

import * as styles from "./style.css";


// 曜日の配列
const days = ["日", "月", "火", "水", "木", "金", "土"];


const CalendarBoard = ({
    calendar,
    month,
    openAddScheduleDialog,
    openCurrentScheduleDialog,
    fetchSchedule
}) => {
    // 初回のみdateをAPIから取得する
    useEffect(() => {
        fetchSchedule();
    }, []);

    return (
        < div className={styles.container} >
            < GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto" >

                {/* 曜日の名前が入った配列daysをマッピング処理して、カレンダー上部に表示 */}
                {
                    days.map((d, index) => (
                        <li key={index}>
                            <Typography
                                className={styles.days}
                                color="textSecondary"
                                align="center"
                                variant="caption"
                                component="div"
                            >
                                {d}
                            </Typography>
                        </li>
                    ))
                }

                {/* 日付を管理しているservices/calendarをマッピングして、「day」と言う名前で
            　　　　　CalendarElementに渡す */}
                {
                    calendar.map(({ date, schedules }) => (
                        <li
                            key={date.toISOString()}
                            onClick={() => openAddScheduleDialog(date)}
                        >
                            <CalendarElement
                                day={date}
                                month={month}
                                schedules={schedules}
                                onClickSchedule={openCurrentScheduleDialog}
                            />
                        </li>
                    ))
                }
            </GridList >
        </div >
    );
};

export default CalendarBoard;
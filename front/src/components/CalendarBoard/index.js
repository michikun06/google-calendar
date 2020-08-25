// 
// CalendarBoardはカレンダー全体の構成や見た目を管理している
// 

import React from "react";
import { GridList, Typography } from "@material-ui/core";

import CalendarElement from "../CalendarElements";
import { createCalendar } from "../../services/calendar";

import * as styles from "./style.css";

// カレンダーの配列を変数に格納
const calendar = createCalendar();

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = () => {
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
                    calendar.map(c => (
                        <li key={c.toISOString()}>
                            <CalendarElement day={c} />
                        </li>
                    ))
                }
            </GridList >
        </div >
    );
};

export default CalendarBoard;
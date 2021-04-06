import React from "react";
import { Typography } from "@material-ui/core";

import dayjs from "dayjs";

import * as styles from "./style.css";

import Schedule from "../Schedule";


import {
    isSameDay,
    isSameMonth,
    isFirstDay,
    getMonth
} from "../../services/calendar";


// カレンダー内の各日付の見た目を担当している
const CalendarElement = ({
    day,
    month,
    schedules,
    ...props
}) => {

    // 表示している月でなければグレーダウン
    const currentMonth = getMonth(month);   //表示している月を取得
    const isCurrentMonth = isSameMonth(day, currentMonth)    // 今月かどうかを判断するための関数
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";     //今月でなければグレーダウン

    const format = isFirstDay(day) ? "M月D日" : "D"    //１日であれば月情報を表示（真偽値）

    const today = dayjs();     // 現在の日にちを取得
    const isToday = isSameDay(day, today)     // 当日かどうかを判断するための関数


    return (
        <div className={styles.element} >

            {/* 日付 */}
            <Typography
                className={styles.date}
                align="center"
                variant="caption"
                component="div"
                color={textColor}
            >
                <span className={isToday ? styles.today : ""}>     {/* isTodayに値が入っていればstyles.todayを適用 */}
                    {day.format(format)}
                </span>
            </Typography>

            {/* 予定 */}
            <div className={styles.schedules}>
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} {...props} />
                ))}
            </div>

        </div>
    );
};

export default CalendarElement;



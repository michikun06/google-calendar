//
// CalendarElementはカレンダーの日付（マスの部分）の構成や見た目を管理している
// 

import React from "react";
import * as styles from "./style.css";


import dayjs from "dayjs";


import { Typography } from "@material-ui/core";


// カレンダーの「同じ月日かどうか？」「日付が１日かどうかを判断」のロジックを作る関数をcalendarからimport
import { isSameDay, isSameMonth, isFirstDay } from '../../services/calendar'


const CalendarElement = ({ day }) => {

    // 今日の日にちを取得
    const today = dayjs();


    // isSameDay()に引数として、「カレンダーの月」と「今日が何月か？」を渡し、
    // 「カレンダーの月」と「今日の月」が一致したらisCurrentMonthに代入する
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";


    // isFirstDay()関数にカレンダーの日にちを渡し、
    // 1ならば「M月D日」、１でなければ「D」を代入
    const format = isFirstDay(day) ? "M月D日" : "D";

    // isSameDayに引数として、「カレンダーの日にち」と「今日の日にち」を渡し、
    // 「カレンダーの日付」と「今日の日にち」が一致したらisTodayに代入する
    const isToday = isSameDay(day, today)

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align="center"
                variant="caption"
                component="div"
            >
                {/* 今日の日付と一致した日ならcssの"styles.today"を数字部分に適用 */}
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalendarElement;
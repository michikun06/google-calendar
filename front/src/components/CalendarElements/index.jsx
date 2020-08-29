//
// CalendarElementはカレンダーの日付（マスの部分）の構成や見た目を管理している
// 

import React from "react";
import * as styles from "./style.css";


// 予定のtitleのみを表示させるための関数
import Schedule from "../Schedule/index";


import dayjs from "dayjs";


import { Typography } from "@material-ui/core";


// カレンダーの「同じ月日かどうか？」「日付が１日かどうかを判断」「表示されている月がメインの月かどうか」の
// ロジックを作る関数をcalendarからimport
import { isSameDay, isSameMonth, isFirstDay, getMonth } from '../../services/calendar'


const CalendarElement = ({
    day,
    month,
    schedules,
    ...props
}) => {

    // 今日の日にちを取得
    const today = dayjs();


    // 表示されているのが何月かを取得
    // isSameMonth()に引数として、「カレンダー配列の月」と「現在表示されているのは何月か？」を渡し、
    // 「カレンダーの月」と「現在の月」が一致したらisCurrentMonthに代入する
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
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

            <div className={styles.schedules}>
                {
                    schedules.map(e => (
                        <Schedule key={e.id} schedule={e} {...props} />
                    ))
                }
            </div>
        </div>
    );
};

export default CalendarElement;
//
// このファイルではユーザーの入力内容（タイトル）をカレンダーの日付下部に表示する役割を担う
// 

import React from "react";

import * as styles from "./style.css";


// ユーザーの入力内容scheduleをpropsとして受け取り、titleのみを表示させる関数
const Schedule = ({ schedule, onClickSchedule }) => {
    return (
        <div
            className={styles.schedule}
            onClick={e => onClickSchedule(schedule, e)}
        >
            {schedule.title}
        </div>
    )
}

export default Schedule;
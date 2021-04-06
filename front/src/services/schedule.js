import dayjs from "dayjs";
import { createCalendar, isSameDay } from "./calendar";


export const setSchedules = (calendar, schedules) =>
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSameDay(e.date, c))
    }))

export const formatSchedule = schedule => ({
    ...schedule,
    date: dayjs(schedule.date)    //dateをdayjsインスタンスに変換
});


// 入力したが、保存せずに閉じようとした時に出す確認画面
export const isCloseDialog = schedule => {
    return isScheduleEmpty(schedule) || window.confirm("保存されていない内容を削除しますか？")
}


// スケジュール作成ダイアログで入力蘭が空かどうかを判断する関数
const isScheduleEmpty = schedule =>
    !schedule.title && !schedule.description && !schedule.location;
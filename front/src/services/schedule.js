
// 予定を追加した日とカレンダーの表示の日が同じならば表示させるためにisSameDay関数をimport
import { isSameDay } from "./calendar";
import dayjs from "dayjs";


// これまでに実装したDayjsの配列calendarと予定の配列schedulesを受け取って、
// 故レンダーのデータ構造を返すための関数
export const setSchedules = (calendar, schedules) =>
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSameDay(e.date, c))
    }));


// date情報をISOStgring　→　dayjsインスタンスに変換
export const formatSchedule = schedule => ({
    ...schedule,
    date: dayjs(schedule.date)
});

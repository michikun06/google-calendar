import { combineReducers } from "redux";

// reducerをimport
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";

const rootReducer = combineReducers({
    calendar: calendarReducer,                // APIから持ってきた暦データを作成した配列の展開してカレンダーを作成
    addSchedule: addScheduleReducer,          // 入力する際のDialogの開閉、入力formの展開を行う
    schedules: schedulesReducer,              // ユーザーの入力内容をstateに保存
    currentSchedule: currentScheduleReducer   // ユーザーが作成した予定を表示、また表示専用のdialogの開閉
});

export default rootReducer;
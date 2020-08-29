// 
// reducerをstoreに渡すために、全reducerを一つにまとめて"src/index.js"に渡す
// 役割を担う。
// 


// combineReducersを使うことで複数のreducerを一つにまとめることができる
import { combineReducers } from "redux";

// 全てのreducerをimportする
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";



// storeに接続するために一つにまとめるためのrootReducer
// importしたreducerそれぞれに名前をつけて一つにまとめる
// これがのちにmapStateToPropsで「state.calendar」で呼び出すことができる
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    currentSchedule: currentScheduleReducer,
    schedules: schedulesReducer
});


// rootReducerを「src / index.js」で受け取り,storeに渡される
export default rootReducer;
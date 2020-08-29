// 
// reducerではactionが実行されたときにどのような処理を行うかを定義する場所である
// 実行する際は前回のstateを参照するが最初はデータがないため、reducerで初期値を定義
// 

import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./actions"

const day = dayjs();

// 年と月の初期値を取得
// day.month()はインデックス番号で返ってくるため、0〜11の数字であるので+1する。
const init = {
    year: day.year(),
    month: day.month() + 1
};


// このreducer内でtype毎に処理を分岐する。
// この関数のreturn値がstoreでcalendarReducerと言う名前で
// 管理されているstateとして更新される。

const calendarReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
};

export default calendarReducer;





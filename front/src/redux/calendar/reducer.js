import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./action";

import { formatMonth } from "../../services/calendar";

const day = dayjs();       //　今日の日付を取得

// 現在の西暦、月情報を初期値としてオブジェクトに
// formattingするための関数に格納する
const init = formatMonth(day);


const calendarReducer = (state = init, { type, payload } = action) => {
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
}

export default calendarReducer;

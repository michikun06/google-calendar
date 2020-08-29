// 
// Dialogで入力した内容を配列に代入して管理するためのredux
// 

import { SCHEDULES_ADD_ITEM } from "./actions";
import dayjs from "dayjs";

// 初期値を設定（itemsのなかに入力内容schedule.formが入る）
const init = {
    items: [],
    isLoading: false
};


const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, { ...payload, id: state.items.length + 1 }]
            };

        default:
            return state;
    }
}

export default schedulesReducer;
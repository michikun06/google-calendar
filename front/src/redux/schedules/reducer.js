// 
// Dialogで入力した内容を配列に代入して管理するためのredux
// 
// import dayjs from "dayjs";

import {
    SCHEDULES_ADD_ITEM,
    SCHEDULES_FETCH_ITEM,
    SCHEDULES_SET_LOADING,
    SCHEDULES_DELETE_ITEM
} from "./actions";


// 初期値を設定（itemsのなかに入力内容schedule.formが入る）
const init = {
    items: [],
    isLoading: false
};


const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {

        // effectで追加に成功した予定のみをfrontの状態にも追加する
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                isLoading: false,
                items: [...state.items, payload]
            };

        // stateで管理されているisLoadingをtrueにする
        case SCHEDULES_SET_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        // stateで管理されているisLoading状態をfalseにして
        // itemsに入力内容を格納する
        case SCHEDULES_FETCH_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            };

        // stateで管理されているisLoading状態をfalseにして
        // itemsに削除内容内容を格納する
        case SCHEDULES_DELETE_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            };

        default:
            return state;
    }
}

export default schedulesReducer;
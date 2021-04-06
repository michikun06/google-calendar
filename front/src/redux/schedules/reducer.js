import dayjs from "dayjs";

import {
    SCHEDULES_ADD_ITEM,
    SCHEDULES_FETCH_ITEM,
    SCHEDULES_SET_LOADING,
    SCHEDULES_DELETE_ITEM,
    SCHEDULES_ASYNC_FAILURE,
    SCHEDULES_RESET_ERROR
} from "./actions";


const init = {
    items: [],
    isLoading: false,
    error: null
};



// reducer関数
const schedulesReducer = (state = init, action) => {
    const { type, payload, error } = action;

    switch (type) {

        // 用意している配列に予定オブジェクトを追加して上書きしている
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, payload]
            };

        // isLoadingをtrueにしている
        case SCHEDULES_SET_LOADING:
            return {
                ...state,
                isLoading: true
            };

        // isLoadingをfalseにして引数payloadをitemsにセットしている
        case SCHEDULES_FETCH_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            }

        // payloadに削除したいscheduleを取り除いた配列がくるのでそれをセットする
        case SCHEDULES_DELETE_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            }

        // オブジェクト内のerrorをtrueにする
        case SCHEDULES_ASYNC_FAILURE:
            return { ...state, error }

        // オブジェクト内のerrorをnullにする
        case SCHEDULES_RESET_ERROR:
            return { ...state, error: null }

        default:
            return state;
    }
}

export default schedulesReducer;
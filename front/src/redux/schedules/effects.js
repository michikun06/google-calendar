import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem,
    schedulesAsyncFailure
} from "./actions";

import {
    get,
    post,
    deleteRequest
} from "../../services/api";

import { formatSchedule } from "../../services/schedule";


// 指定した月の予定の情報を取得する
export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    dispatch(schedulesSetLoading)    //　loading状態にする

    try {
        const result = await get(`schedules?month=${month}&year=${year}`);  //指定した年月の予定を取得
        const formatedSchedule = result.map(r => formatSchedule(r));        // データを所定の形に整形する

        dispatch(schedulesFetchItem(formatedSchedule));　　　　　             //作成したデータを引数に与えてreducerを起動させる
    } catch (err) {
        console.error(err);
        dispatch(schedulesAsyncFailure(err.message));
    }
}



// 指定した月のscheduleに予定のオブジェクトを追加する
export const asyncSchedulesAddItem = schedule => async dispatch => {
    dispatch(schedulesSetLoading());                     // Loading : trueにする

    try {
        const body = { ...schedule, date: schedule.date.toISOString() };
        const result = await post("schedules", body);

        const newSchedule = formatSchedule(result);
        dispatch(schedulesAddItem(newSchedule));
    } catch (err) {
        console.error(err);
        dispatch(schedulesAsyncFailure(err.message));
    }

};


// 指定した月の、指定したidの予定を削除する
export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading())          //Loading状態にする
    const currentSchedules = getState().schedules.items;

    try {
        await deleteRequest(`schedules/${id}`);

        const newSchedules = currentSchedules.filter(s => s.id !== id);  //消したい予定を取り除いて新たな配列を作成
        dispatch(schedulesDeleteItem(newSchedules));
    } catch (err) {
        console.error(err);
        dispatch(schedulesAsyncFailure(err.message));
    }
}
// apiにfetchする関数を呼び出すためのaction
// ローディング状態にするための関数を呼び出すaction
import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem
} from "./actions";

// apiから指定のデータをJSON配列で受け取るための関数
import { get, post, deleteRequest } from "../../services/api";


import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {

    // isLoading:true
    dispatch(schedulesSetLoading());

    // 年と月の情報を取得してその月の情報をJSON配列として受け取る
    // awaitで受け取っているため、非同期処理が終わるまで処理をブロックして、
    // resultに入れている。また、返ってくるdate情報はISOStgring
    const result = await get(`schedules?month=${month}&year=${year}`);

    // 配列内のdate情報をISOStgring　→　dayjsインスタンスに変換
    const formatedSchedule = result.map(r => formatSchedule(r));

    // 取得したデータをセットするためのdispatch関数（引数に正式なデータ）
    dispatch(schedulesFetchItem(formatedSchedule));

};

export const asyncSchedulesAddItem = schedule => async dispatch => {
    dispatch(schedulesSetLoading());

    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
}

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading);
    const currentSchedules = getState().schedules.items;

    await deleteRequest(`schedules/${id}`);
    const newSchedules = currentSchedules.filter(s => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
}






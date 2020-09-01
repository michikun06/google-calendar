//
// Dialogで入力した内容を配列に代入するためのaction
// 


// constans
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING";
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";



// actions

// 入力内容をformに代入する（引数payloadに入力内容を渡す予定）
export const schedulesAddItem = payload => ({
    type: SCHEDULES_ADD_ITEM,
    payload
});

// ローディング状態時に取得したデータをセットするためのaction
export const schedulesFetchItem = payload => ({
    type: SCHEDULES_FETCH_ITEM,
    payload
});

// 非同期処理を行うためにはLoading状態にする必要がある。
// component側のLoading状態を切り替えるためのaction
export const schedulesSetLoading = () => ({
    type: SCHEDULES_SET_LOADING
});

// カレンダーに表示されている予定を削除する処理を呼び出すためのaction(削除する内容を引数payloadに入れる)
export const schedulesDeleteItem = payload => ({
    type: SCHEDULES_DELETE_ITEM,
    payload
})
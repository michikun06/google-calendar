// constants
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";

// APIサーバーから予定をとってくる際のaction
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULES_SET_LOADING = "SCHEDULES_SET_LOADING";

// DB内のデータを削除するためのaction
export const SCHEDULES_DELETE_ITEM = "SCHEDULES_DELETE_ITEM";

// エラー状態の更新とリセットをするためのaction
export const SCHEDULES_ASYNC_FAILURE = "SCHEDULES_ASYNC_FAILURE";
export const SCHEDULES_RESET_ERROR = "SCHEDULES_RESET_ERROR";


// actions
// ユーザーの入力内容を配列に保存する動作を行うための
export const schedulesAddItem = payload => ({
    type: SCHEDULES_ADD_ITEM,
    payload
});

// APIサーバーから予定を取得するaction(payloadには年月データ)
export const schedulesFetchItem = payload => ({
    type: SCHEDULES_FETCH_ITEM,
    payload
});

// サーバーにリクエストを送る前にローディング状態にするためのaction
export const schedulesSetLoading = () => ({
    type: SCHEDULES_SET_LOADING
})

// 予定を削除するためのaction
export const schedulesDeleteItem = payload => ({
    type: SCHEDULES_DELETE_ITEM,
    payload
})

// errorをstateに更新するためのaction
export const schedulesAsyncFailure = error => ({
    type: SCHEDULES_ASYNC_FAILURE,
    error
})

// error状態を取り消して通常状態にするためのaction
export const schedulesResetError = () => ({
    type: SCHEDULES_RESET_ERROR
})
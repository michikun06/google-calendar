//
// Dialogで入力した内容を配列に代入するためのaction
// 


// constans
export const SCHEDULES_ADD_ITEM = "SCHEDULES_ADD_ITEM";


// actions
// 入力内容をformに代入する（引数payloadに入力内容を渡す予定）
export const schedulesAddItem = payload => ({
    type: SCHEDULES_ADD_ITEM,
    payload
})
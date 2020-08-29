// 
// ダイアログに指示を出すためのactionを設定
// 


// constans
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";


// actions

// ①ユーザーの入力内容をformのデータに更新する
export const addScheduleSetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload
})

// ②入力formがあるdialogを表示
export const addScheduleOpenDialog = () => ({
    type: ADD_SCHEDULE_OPEN_DIALOG
})

// ③入力formがあるdialogを閉じる
export const addScheduleCloseDialog = () => ({
    type: ADD_SCHEDULE_CLOSE_DIALOG
})

























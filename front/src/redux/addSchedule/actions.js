export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";
export const ADD_SCHEDULE_START_EDIT = "ADD_SCHEDULE_START_EDIT";


// 入力内容をstoreに保存するためのaction
export const addScheduleSetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload
})


// 予定を作成する際のダイアログを開くaction
export const addScheduleOpenDialog = () => ({
    type: ADD_SCHEDULE_OPEN_DIALOG
});


// 予定を作成する際のダイアログを開くaction
export const addScheduleCloseDialog = () => ({
    type: ADD_SCHEDULE_CLOSE_DIALOG,
})


// ダイアログに値が入力されたかどうかを判断するためのaction
export const addScheduleStartEdit = () => ({
    type: ADD_SCHEDULE_START_EDIT
})

//
//　作成された予定の「dialogの表示」「セットする」「Dialogを閉じる」
// 

// cnstans
export const CURRENT_SCHEDULE_SET_ITEM = "CURRENT_SCHEDULE_SET_ITEM";
export const CURRENT_SCHEDULE_OPEN_DIALOG = "CURRENT_SCHEDULE_OPEN_DIALOG";
export const CURRENT_SCHEDULE_CLOSE_DIALOG = "CURRENT_SCHEDULE_CLOSE_DIALOG";


// actions
// ①作成している予定をdialogにセットするためのaction
export const currentScheduleSetItem = payload => ({
    type: CURRENT_SCHEDULE_SET_ITEM,
    payload
});

// ②作成した詳細予定のDialogを表示するための関数
export const currentScheduleOpenDialog = () => ({
    type: CURRENT_SCHEDULE_OPEN_DIALOG,
});

// ③作成した詳細予定のDialogを閉じるための関数
export const currentScheduleCloseDialog = () => ({
    type: CURRENT_SCHEDULE_CLOSE_DIALOG,
});


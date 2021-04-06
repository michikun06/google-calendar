import {
    ADD_SCHEDULE_SET_VALUE,
    ADD_SCHEDULE_OPEN_DIALOG,
    ADD_SCHEDULE_CLOSE_DIALOG,
    ADD_SCHEDULE_START_EDIT
} from "./actions";

import dayjs from "dayjs";


// ユーザーの入力内容、ダイアログの開閉、文字入力の有無をstateで管理
const init = {
    form: {
        title: "",
        description: "",
        date: dayjs(),
        location: ""
    },
    isDialogOpen: false,       // ダイアログ開閉の有無
    isStartEdit: false         // 文字が入力されているかの有無
}

const addScheduleReducer = (state = init, action) => {
    const { type, payload } = action;

    // action createrの指示ごとに処理を分岐
    switch (type) {


        // 現在のstateを展開して渡ってきたformデータを上書きした値を返す
        case ADD_SCHEDULE_SET_VALUE:
            return { ...state, form: { ...state.form, ...payload } }


        // 現在のstateを展開して、isDialogOpenをtueに上書きした値を返す
        case ADD_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true };


        // isDialogOpenをfalseの初期値をそのまま返す
        case ADD_SCHEDULE_CLOSE_DIALOG:
            return init


        // 文字が入力されたら合図を出す
        case ADD_SCHEDULE_START_EDIT:
            return { ...state, isStartEdit: true }


        // 現在の値をそのまま返す
        default:
            return state;
    }
}

export default addScheduleReducer;
import {
    ADD_SCHEDULE_SET_VALUE,
    ADD_SCHEDULE_OPEN_DIALOG,
    ADD_SCHEDULE_CLOSE_DIALOG
} from "./actions";
import dayjs from "dayjs";




// ダイアログで管理する項目の初期値を設定（データが格納されている「form」と
// ダイアログが開いているか判断する「isDialogOpen」）
const init = {
    form: {
        title: "",
        description: "",
        date: dayjs(),
        location: ""
    },
    isDialogOpen: false
}


// action.type別に「formの更新」、「Dialogの開閉」の処理を実行し
// returnでstoreのstateを更新させる

const addScheduleReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {

        // formの内容をユーザーの入力内容に更新する
        // ※現状のformの内容は消さない、stateに新たなformを作成して
        // 　入力した項目だけが更新される仕組み
        case ADD_SCHEDULE_SET_VALUE:
            return { ...state, form: { ...state.form, ...payload } };

        // state配列のisDialogOpenをtrueにする
        case ADD_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true };

        // state配列のisDialogOpenをfalseにする
        case ADD_SCHEDULE_CLOSE_DIALOG:
            return init;

        default:
            return state;
    }
};

export default addScheduleReducer;

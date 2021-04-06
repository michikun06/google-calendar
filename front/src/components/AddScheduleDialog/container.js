import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";


// reducerを起動させるためのactionを追加
import {
    addScheduleCloseDialog,
    addScheduleSetValue,
    addScheduleStartEdit
} from "../../redux/addSchedule/actions";

import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

// 確認画面
import { isCloseDialog } from "../../services/schedule";





const mapStateToProps = state => ({ schedule: state.addSchedule })


const mapDispatchToProps = dispatch => ({

    // 「×」ボタンor周囲がクリックされた時にDialogを閉じるための関数
    closeDialog: () => {
        dispatch(addScheduleCloseDialog())
    },

    // Dialogへの入力内容を展開し表示するための関数
    setSchedule: value => {
        dispatch(addScheduleSetValue(value))
    },

    // 保存ボタンが押された時に実行される関数（storeのstateに保存＆Dialogを閉じる）
    saveSchedule: schedule => {
        dispatch(asyncSchedulesAddItem(schedule))
        dispatch(addScheduleCloseDialog())
    },

    // dialogが空欄の時に発動させるdispatch関数
    setIsEditStart: () => {
        dispatch(addScheduleStartEdit())
    }
})

const mergeProps = (stateProps, dispatchProps) => {
    const {
        schedule: { form: schedule }
    } = stateProps;

    const { saveSchedule, closeDialog } = dispatchProps

    return {
        ...stateProps,
        ...dispatchProps,
        saveSchedule: () => {
            saveSchedule(schedule);
        },
        closeDialog: () => {
            if (isCloseDialog(schedule)) {
                closeDialog();
            }
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);





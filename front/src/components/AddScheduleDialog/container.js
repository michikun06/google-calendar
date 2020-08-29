// 
// ダイアログの開閉、formの更新のreducerをpresentation.jsで
// 操作できるようにするためのロジック作成
// 

import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";

// Dialogを閉じるための関数をactionから呼び出す
// 入力内容をformに保存するための関数をactionから呼び出す
import {
    addScheduleCloseDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions"

// Dialogでの入力内容をformに保存する関数をdispatchするためにactionから呼び出す
import { schedulesAddItem } from "../../redux/schedules/actions";


// storeのaddScheduleをpresentationでprops.scheduleで呼び出せるように接続
const mapStateToProps = state => ({
    schedule: state.addSchedule
})

// dialogを閉じるためのaddScheduleCloseDialogをactionから持ってきて、
// props.closeDialogでreducerにdispatchするための設定
// props.setScheduleでformを作成し、入力内容(value)を保存するためのactionをreducerにdispatch
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    },
    saveSchedule: schedule => {
        dispatch(schedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    }
})


// scheduleにmapStateToPropsの内容を保存してformに保存するdispatch関数に引数として渡している
const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
        } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);
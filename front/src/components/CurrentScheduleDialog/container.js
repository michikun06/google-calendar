//
// ここでは作成した予定の表示を担う、storeから作成されているstateを引っ張ってきて表示する
// 

import { connect } from "react-redux";
import CurrentScheduleDialog from "./presentation";


// dialogを閉じる処理を行うdispatch関数をimport
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";


// 非同期処理を用いて、削除に必要な一連の処理を行う関数
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects";


// 作成された予定をreducerから引っ張ってきて、view側でprops.scheduleで使用
const mapStateToProps = state => ({ schedule: state.currentSchedule })


// dialogを閉じるactionをreducerにdspatchするための関数をcloseDialogで呼び出せるようにする
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog());
    },
    deleteItem: id => {
        dispatch(asyncSchedulesDeleteItem(id))
        dispatch(currentScheduleCloseDialog())
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    deleteItem: () => {
        const { id } = stateProps.schedule.item;
        dispatchProps.deleteItem(id);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CurrentScheduleDialog);


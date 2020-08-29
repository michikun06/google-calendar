//
// ここでは作成した予定の表示を担う、storeから作成されているstateを引っ張ってきて表示する
// 

import { connect } from "react-redux";
import CurrentScheduleDialog from "./presentation";


// dialogを閉じる際にdispatchする関数をimport
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";


// 作成された予定をreducerから引っ張ってきて、view側でprops.scheduleで使用
const mapStateToProps = state => ({ schedule: state.currentSchedule })


// dialogを閉じるactionをreducerにdspatchするための関数をcloseDialogで呼び出せるようにする
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentScheduleDialog);


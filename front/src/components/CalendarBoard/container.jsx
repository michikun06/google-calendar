// 
// このファイルでは"CalendarBoard/presentation.jsx"を
// reduxに接続する役割を担っている。いわば内部システム専用のファイル
// 

// カレンダー作成のロジックを担っているcreateCalendarをimport
import { createCalendar } from "../../services/calendar";

// これで必要な分量だけreact←→reduxを接続している
import { connect } from "react-redux";

import { setSchedules } from "../../services/schedule";


// 接続したいcomponentをimport
import CalendarBoard from "./presentation";

import {
    addScheduleOpenDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";

import {
    currentScheduleSetItem,
    currentScheduleOpenDialog
} from "../../redux/currentSchedule/actions";


// calendarと言う名前でstoreに設定したstate.calendarをpropsとして使うことができる
const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});


// ダイアログのを開くためのactionをstoreのreducerへdispatchする関数を接続して、
// view側でprops.openAddScheduleDialogで呼び出せるようにする
const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog())
        dispatch(addScheduleSetValue({ date: d }))
    },
    openCurrentScheduleDialog: (schedule, e) => {
        e.stopPropagation();

        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    }
})


// 「mapStateToProps」と「mapDisapatchToProps」で生成されたpropsを引数にとり、
// 名前をつけて、コンポーネントで使う形に整形して渡すための関数
const mergeProps = (stateProps, dispatchProps) => {

    // 現在の月情報と予定の情報をstatePropsで受け取り、calendarとschedulesに格納する
    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    // ユーザーが入力した予定の情報が格納されたカレンダー配列を
    // setSchedulesに作成して、calendarに格納する
    const calendar = setSchedules(createCalendar(month), schedules);

    return {
        ...stateProps,
        ...dispatchProps,
        calendar,
        month
    };
};




export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);
import Navigation from "./presentation";

import { connect } from "react-redux";

// 先月、来月の年月情報を取得するための関数をimport
// カレンダー情報をdayjsインスタンスで返すgetMonth
// 「month」「year」の形で返す関数
import {
    getNextMonth,
    getPreviousMonth,
    getMonth,
    formatMonth
} from "../../services/calendar";

// 取得し他情報をカレンダーにセットするためのaction（dispatch関数）
import { calendarSetMonth } from "../../redux/calendar/actions"


// stateを取得してカレンダーに表示
const mapStateToProps = state => ({ calendar: state.calendar });


// presentation.jsxにて「props.setMonth」で呼び出され、
// 引数に現在の月情報を渡されて、calendarSetMonth()がreducerに
// dispatchされる
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    }
});


const mergeProps = (stateProps, dispatchProps) => ({

    // state情報をdayjsインスタンスに変更する
    month: getMonth(stateProps.calendar),

    // 
    // MSTP → mergeProps → MDTP
    // 

    setNextMonth: () => {

        // mapStateToProps.calendarより取得した現在の月情報を
        // getNextMonth()の引数に渡すことで来月のカレンダー情報を取得できる
        const nextMonth = getNextMonth(stateProps.calendar);

        // 取得した来月の月情報をmapDispatchToPropsの引数に渡し、
        // reducerの「calendarSetMonth」にdispatchする
        dispatchProps.setMonth(nextMonth)
    },

    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    },

    setMonth: dayObj => {
        // dayjs → reduxのstate
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
    }

});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);
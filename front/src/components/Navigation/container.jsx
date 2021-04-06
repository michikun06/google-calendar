import Navigation from "./presentation";

import { connect } from "react-redux";

import {
    getNextMonth,
    getPreviousMonth,
    getMonth,
    formatMonth
} from "../../services/calendar";

import { calendarSetMonth } from "../../redux/calendar/action"

import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";


const mapStateToProps = state => ({
    calendar: state.calendar
});


// ページに作成した現在のカレンダーを表示させるための関数
const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month))
    },
    fetchItem: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});


// 次月と前月のカレンダーを表示するための関数
const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),

    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar)
        dispatchProps.setMonth(nextMonth);

        dispatchProps.fetchItem(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar)
        dispatchProps.setMonth(previousMonth)

        dispatchProps.fetchItem(previousMonth)
    },
    setMonth: dayObj => {
        const month = formatMonth(dayObj)
        dispatchProps.setMonth(month)

        dispatchProps.fetchItem(month)
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation)
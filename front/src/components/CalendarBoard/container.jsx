import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

import { setSchedules } from "../../services/schedule";

import {
    addScheduleOpenDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions"

import {
    currentScheduleSetItem,
    currentScheduleOpenDialog
} from "../../redux/currentSchedule/actions";

import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({

    // カレンダーをクリックした時に呼ばれるdispacher
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());

        dispatch(addScheduleSetValue({ date: d }))
    },

    // 作成した予定をクリックした時に呼ばれるdispacher
    openCurrentScheduleDialog: (schedule, e) => {
        e.stopPropagation();

        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    },

    // データを取得するためのdispatch関数
    fetchSchedule: month => {
        dispatch(asyncSchedulesFetchItem(month))
    }

})

const mergeProps = (stateProps, dispatchProps) => {
    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);

    return {
        ...stateProps,
        ...dispatchProps,
        fetchSchedule: () => dispatchProps.fetchSchedule(month),
        month,
        calendar
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CalendarBoard);
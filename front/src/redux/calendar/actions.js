// constansを設定し、constantsから選ぶことで
// タイポを迅速に見つけることができる
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";


// dispatchするためのactionsを設定
// 引数がpayload
export const calendarSetMonth = payload => ({
    type: CALENDAR_SET_MONTH,
    payload
});
import dayjs from "dayjs";
import { months } from "dayjs/locale/ja";


// カレンダーの生成するための関数
export const createCalendar = month => {

    // 今月の最初の日を変数で管理する
    const firstDay = getMonth(month);
    const firstDayIndex = firstDay.day();            //最初の日の曜日のindex番号を取得

    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, "day");

            return day;
        });
}


// 現在の西暦と月情報のdayjsインスタンスを返す関数
export const getMonth = ({ year, month }) => {
    return dayjs(`${year}-${month}`)
};

// 配列内の日にちが今日の日付がどうか判定するための関数
export const isSameDay = (d1, d2) => {
    const format = "YYYYMMDD"    //　統一するためのフォーマットを作成
    return d1.format(format) === d2.format(format)     // YYYYMMDDが全て同じであれば値を返す
}

// 配列内の月情報が今月かどうか判定するための関数
export const isSameMonth = (m1, m2) => {
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format)
}

//１日であれば月情報を表示（真偽値）
export const isFirstDay = day => day.date() === 1;


// 次月の情報を取得するための関数
export const getNextMonth = month => {
    const day = getMonth(month).add(1, "month");
    return formatMonth(day);
}

// 前月の情報を取得するための関数
export const getPreviousMonth = month => {
    const day = getMonth(month).add(-1, "month");
    return formatMonth(day);
}

// 西暦と月情報をオブジェクトのフォーマットに変換するための関数
export const formatMonth = day => ({
    month: day.month() + 1,
    year: day.year()
});

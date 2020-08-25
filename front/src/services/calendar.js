// 
// createCalendarはカレンダーの日付を得るための
// ロジック部分を構成している
// 


import dayjs from 'dayjs';

// 35個の配列を作成して、配列の中身を０に初期化
export const createCalendar = () => {

    // 今月の初日の情報をfirstDayにいれる
    const firstDay = dayjs().startOf("month");
    console.log(firstDay);


    // 月の初日の曜日をindex番号を取得(日曜が０〜土曜６)
    const firstDayIndex = firstDay.day();

    // 月の初日の配列番号が０になるようにindex番号分だけ引いてreturn
    return Array(35)
        .fill(0)
        .map((_, i) => {

            // 月の初日を０として、その差分をdiffFromFirstDayに代入する
            const diffFromFirstDay = i - firstDayIndex;

            // カレンダーの正しい日付をdayの中に格納する
            const day = firstDay.add(diffFromFirstDay, "day");
            return day;
        })
}

// 今日の日にちとカレンダーの日にちが一致したら、今日の日にちを返す関数
export const isSameDay = (d1, d2) => {
    // このformatでreturn
    const format = "YYYYMMDD";
    return d1.format(format) === d2.format(format);
}

// 今日の月とカレンダーの月が一致したら、今日の月と日にちを返す関数
export const isSameMonth = (m1, m2) => {
    // このformatでreturn
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format);
};

// カレンダーの日にちが1ならば、１を返す関数を定義
export const isFirstDay = day => day.date() === 1;
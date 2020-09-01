// 
// createCalendarはカレンダーの日付を得るための
// ロジック部分を構成している
// 


import dayjs from 'dayjs';


// 
// カレンダー一面の情報を取得するための関数
// 35個の配列を作成して、配列の中身を０に初期化
// 
export const createCalendar = month => {

    // 今月の初日の情報をfirstDay関数に引数として今月の数字を渡して呼び出す
    const firstDay = getMonth(month);

    // 月の初日の曜日のindex番号を取得(日曜が０〜土曜６)
    const firstDayIndex = firstDay.day();

    // 月の初日の配列番号が０になるようにindex番号分だけ引いてreturn
    return Array(42)
        .fill(0)
        .map((_, i) => {

            // 月の初日を０として、その差分をdiffFromFirstDayに代入する
            const diffFromFirstDay = i - firstDayIndex;

            // カレンダーの正しい日付をdayの中に格納する
            const day = firstDay.add(diffFromFirstDay, "day");
            return day;
        })
}

// 今月の年月を引数として受け取り、年月の情報をreturnする関数
export const getMonth = ({ year, month }) => {
    return dayjs(`${year}-${month}`);
};


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




// 
// 来月ボタンがクリックされた際に次月のカレンダー情報を取得する関数（引数に現在の月を渡す）
// 以下二つの関数を呼び出すことでカレンダーの月を変換することができる
// 
export const getNextMonth = month => {

    // getMonth()に渡すことで、「2020 - 08」のようなdayjsインスタンスに
    // 変換している（日付として管理するため）その後にmonthに対して１だけ足すと言うアプローチをとる
    const day = getMonth(month).add(1, "month")

    // formatMonth()に渡し、「month」と「year」で管理
    return formatMonth(day);
}


// 先月ボタンがクリックされた際に前月のカレンダー情報を取得する関数（引数に現在の月を渡す）
export const getPreviousMonth = month => {
    const day = getMonth(month).add(-1, "month")
    return formatMonth(day);
}


// monthに月、yearに西暦を入れた情報を返すための関数
export const formatMonth = day => ({
    // 月情報はindex番号（0〜11）で返ってくるので、＋1する
    month: day.month() + 1,
    year: day.year()
});
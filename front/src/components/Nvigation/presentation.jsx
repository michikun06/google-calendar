// 
// Toolbarの見た目を担っているコンポーネント
// 

import React from "react";

// 小さなカレンダーDatePickerをimport
import { DatePicker } from "@material-ui/pickers";


// Toolbarに必要な素材をimport
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";


// 一つ目の（）にはCSSを書き、2つ目の（）には適用したい部分の名前を書く
const StyledToolbar = withStyles({
    root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
    root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledDatePicker = withStyles({
    root: { marginLeft: 30 }
})(DatePicker);



const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {

    return (
        <StyledToolbar>

            {/* 一番左のメニューボタン */}
            <IconButton>
                <DehazeIcon />
            </IconButton>

            {/* 左から2番目カレンダーの画像 */}
            <img src="/images/calendar_icon.png" width="40" height="40" />

            {/* カレンダー */}
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>

            {/* 先月への切り替えボタン */}
            <IconButton size="small" onClick={setPreviousMonth}>
                <ArrowBackIos />
            </IconButton>

            {/* 来月への切り替えボタン */}
            <IconButton size="small" onClick={setNextMonth}>
                <ArrowForwardIos />
            </IconButton>

            {/* DatePickerを表示ボタン */}
            <StyledDatePicker
                value={month}
                onChange={setMonth}
                variant="inline"
                format="YYYY年MM月"
                animateYearScrolling
                disableToolbar
            />

        </StyledToolbar>
    );
};

export default Navigation;
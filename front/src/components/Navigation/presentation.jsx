import React, { useState } from "react";

import { DatePicker } from "@material-ui/pickers";

import { IconButton, Toolbar, Typography, withStyles, Tooltip } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";


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

            {/* メニューボタン */}
            <IconButton>
                <DehazeIcon />
            </IconButton>

            {/* カレンダーの画像 */}
            <img src="/images/calendar_icon.png" width="40" height="40" />

            {/* 「カレンダー」の文字 */}
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>

            {/* 前月へ戻るボタン */}
            <Tooltip title="前の月へ" placement="bottom">
                <IconButton size="small" onClick={setPreviousMonth}>
                    <ArrowBackIos />
                </IconButton>
            </Tooltip>

            {/* 次月へ進むボタン */}
            <Tooltip title="次の月へ" placement="bottom">
                <IconButton size="small" onClick={setNextMonth}>
                    <ArrowForwardIos />
                </IconButton>
            </Tooltip>

            <StyledDatePicker
                value={month}
                onChange={setMonth}
                variant="inline"
                format="YYYY年M月"
                animateYearScrolling={false}
                disableToolbar
            />

        </StyledToolbar>
    )
};

export default Navigation;
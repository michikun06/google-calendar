// 
// このファイルは予定追加のDialogのView部分を担っている
// 「isDialogOpen: true」で見えるようになる
// 

import React from "react";


// 素材をimport
import {
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid,
    IconButton
} from "@material-ui/core";


// Dialogの入力蘭左のアイコンマーク、また右上の×ボタンマーク
import {
    LocationOnOutlined,
    NotesOutlined,
    AccessTime,
    Close
} from "@material-ui/icons";


// 閉じるボタンを上部右端に実装するためのcssを適用する
import * as styles from "./style.css";


// 小さなカレンダー
import { DatePicker } from "@material-ui/pickers";


import { withStyles } from "@material-ui/styles";

const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: { marginBottom: 32, fontSize: 22 }
})(Input);


// stateのisDialogOpenをダイアログに接続することで開閉できるようになる
const AddScheduleDialog = ({
    schedule: {
        form: { title, location, description, date },
        isDialogOpen
    },
    closeDialog,
    setSchedule,
    saveSchedule
}) => {
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>

            {/* 上部右端閉じるボタン */}
            <DialogActions>
                <div className={styles.closeButton}>
                    <IconButton onClick={closeDialog} size="small">
                        <Close />
                    </IconButton>
                </div>
            </DialogActions>


            <DialogContent>

                {/* Dialogのタイトル部分 */}
                {/* 
                ユーザーがTitleを入力　
                　　　　　　↓
                引数に入力内容を入れて、dispatch関数setScheduleが作動
                　　　　　　↓
                Titleのvalueが更新される 
                */}
                <Title
                    autoFocus
                    fullWidth
                    placeholder="タイトルと日時を追加"
                    value={title}
                    onChange={e => setSchedule({ title: e.target.value })}
                />


                {/* Dialog画面からDatePickerを用いて日付指定 */}
                <Grid container spacing={1} alignItems="center" justyfy="space-between">
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            value={date}
                            onChange={d => setSchedule({ date: d })}
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            disableToolbar
                            fullWidth
                            style={spacer}
                        />
                    </Grid>
                </Grid>


                {/* Dialogの位置情報入力部分 */}
                {/* dispatch関数の作動についてはTitleと同様 */}
                <Grid container spacing={1} alignItems="center" justyfy="space-between">
                    <Grid item>
                        <LocationOnOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            style={spacer}
                            fullWidth
                            placeholder="場所を追加"
                            value={location}
                            onChange={e => setSchedule({ location: e.target.value })}
                        />
                    </Grid>
                </Grid>


                {/* Dialogの説明入力部分 */}
                {/* dispatch関数の作動についてはTitleと同様 */}
                <Grid container spacing={1} alignItems="center" justyfy="space-between">
                    <Grid item>
                        <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            style={spacer}
                            fullWidth
                            placeholder="説明を追加"
                            value={description}
                            onChange={e => setSchedule({ description: e.target.value })}
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            {/* 保存ボタン */}
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={saveSchedule}>
                    保存
                </Button>
            </DialogActions>

        </Dialog>
    );
};


export default AddScheduleDialog;
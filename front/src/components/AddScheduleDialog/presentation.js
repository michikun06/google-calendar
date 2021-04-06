import React from "react";
import {
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Input,
    Grid,
    IconButton,
    Typography,
    Tooltip
} from "@material-ui/core";

import {
    LocationOnOutlined,
    NotesOutlined,
    AccessTime,
    Close
} from "@material-ui/icons";

import * as styles from "./style.css";

import { DatePicker } from "@material-ui/pickers";

import { withStyles } from "@material-ui/styles";


const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: { fontSize: 22 }
})(Input);


const AddScheduleDialog = ({
    schedule: {
        form: { title, location, description, date },
        isDialogOpen,
        isStartEdit
    },
    closeDialog,
    setSchedule,
    saveSchedule,
    setIsEditStart
}) => {

    const isTitleInvalid = !title && isStartEdit;      //  title === ""かつ、isStartEdit=== falseのときにエラー

    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>

            {/* 閉じるボタン */}
            <DialogActions>
                <div className={styles.closeButton}>
                    <Tooltip title="閉じる" placement="bottom">
                        <IconButton onClick={closeDialog} size="small">
                            <Close />
                        </IconButton>
                    </Tooltip>
                </div>
            </DialogActions>

            <DialogContent>

                {/* タイトル入力蘭 */}
                <Title
                    autoFocus
                    fullWidth
                    placeholder="タイトルと日時を追加"
                    value={title}
                    onChange={e => setSchedule({ title: e.target.value })}
                    onBlur={setIsEditStart}        // フォーカスが外れたタイミングでisStartEdit:trueにするdispatch関数を呼び出し
                    error={isTitleInvalid}
                />
                <div className={styles.validation}>　　　{/* エラー認定されたときにのみ表示される */}
                    {isTitleInvalid && (
                        <Typography variant="caption" color="error">
                            タイトルは必須です。
                        </Typography>
                    )}
                </div>



                {/* 日程を追加 */}
                <Grid container spacing={1} alignItems="center" justyfy="space-between">
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            value={date}
                            onChange={d => setSchedule({ date: d })}
                            style={spacer}
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            disableToolbar
                            fullWidth
                            style={spacer}
                        />
                    </Grid>
                </Grid>

                {/* 位置情報入力蘭 */}
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

                {/* 説明入力蘭 */}
                <Grid container spacing={1} alignItems="center" justyfy="space-between">
                    <Grid item>
                        <NotesOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            style={spacer}
                            fullWidth
                            placeholder="説明を追加"
                            valule={description}
                            onChange={e => setSchedule({ description: e.target.value })}
                        />
                    </Grid>
                </Grid>

            </DialogContent>

            {/* 保存ボタン */}
            <DialogActions>
                <Button
                    onClick={saveSchedule}
                    color="primary"
                    variant="outlined"
                    disabled={!title}
                >
                    保存
                </Button>
            </DialogActions>

        </Dialog>
    )
}

export default AddScheduleDialog;
// 
// カレンダーに表示されている予定の詳細を表示する役割を担う
// 

import React from "react";

// Dialogを作成するための素材
import {
    Dialog,
    DialogContent,
    IconButton,
    DialogActions,
    Grid,
    Typography
} from "@material-ui/core";

// 上部右端の閉じるボタンと左側のアイコン素材
import {
    Close,
    LocationOnOutlined,
    NotesOutlined,
    DeleteOutlineOutlined
} from "@material-ui/icons";

import styles from "./style.css";

const spacer = (top, bottom) => ({
    margin: `${top}px 0 ${bottom}px 0`
});

// 予定の詳細表示dialog
const CurrentScheduleDialog = ({
    schedule: { item, isDialogOpen },
    closeDialog,
    deleteItem
}) => {
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>

            {/* Dialogを閉じるための×ボタン */}
            <DialogActions>
                <div className={styles.closeButton}>
                    <IconButton onClick={deleteItem} size="small">
                        <DeleteOutlineOutlined />
                    </IconButton>
                    <IconButton onClick={closeDialog} size="small">
                        <Close />
                    </IconButton>
                </div>
            </DialogActions>

            <DialogContent>
                {item && (
                    <>

                        {/* titleと日付の表示 */}
                        <div>
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 30)}
                            >
                                <Grid item>
                                    <span className={styles.box}></span>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {item.date.format("M月 D日")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>


                        {/* 位置情報の表示 */}
                        {item.location && (
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 4)}
                            >
                                <Grid item>
                                    <LocationOnOutlined />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>{item.location}</Typography>
                                </Grid>
                            </Grid>
                        )}

                        {/* 説明の表示 */}
                        {item.description && (
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 4)}
                            >
                                <Grid item>
                                    <NotesOutlined />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>{item.description}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CurrentScheduleDialog;
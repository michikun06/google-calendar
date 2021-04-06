import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import { Close, Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";


// cssを整形するための関数
const useStyles = makeStyles(theme => ({
    message: {
        display: "flex",
        alignItems: "center"
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    }
}));


// エラー表示するためのコンポーネント
const ErrorSnackbar = ({ error, handleClose }) => {
    const classes = useStyles();       // cssをまとめて格納

    return (
        <Snackbar
            open={!!error}                // errorがあればtrueとなり表示する（bool値）
            onClose={handleClose}         // 表示を閉じた時にエラー状態をfalseにする処理
            autoHideDuration={3000}       // 3秒後に自動で閉じる
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}    //右下に固定
            message={
                <span className={classes.message}>
                    <Warning className={[classes.icon, classes.iconVariant].join(" ")} />
                    {error}
                </span>
            }
            action={

                // エラー画面を閉じた際にエラーをリセットするためののdispatch関数（handleClose）を適用
                <IconButton color="inherit" onClick={handleClose}>
                    <Close className={classes.icon} />
                </IconButton>
            }
        />
    )
}

export default ErrorSnackbar;
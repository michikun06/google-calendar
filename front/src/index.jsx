import React from "react";
import ReactDOM from "react-dom";

// redux使用に必要な二つをimport
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// 非同期処理に必要なライブラリを追加
import thunk from "redux-thunk";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";


// 日本時間に設定してdayjsを使用
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja")


// reducerをまとめたrootReducerをimport
import rootReducer from "./redux/rootReducer";

// 必要なcomponentをimport
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import ErrorSnackbar from "./components/ErrorSnackbar/container";


// reducerと非同期処理が使えるようにしてstoreを作成
const store = createStore(rootReducer, applyMiddleware(thunk));

// ページ全体のJSXをHTMLに変換させて表示している
const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
            <ErrorSnackbar />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
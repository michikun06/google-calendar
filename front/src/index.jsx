// 
// reactで作成したものをHTML形式に変換して、index.htmlに全データを渡す
// 働きを担う。
// 


import React from "react";
import ReactDOM from "react-dom";

// storeを作成する際はこの二つをセットでimportする
// 非同期処理を使う際はapplyMiddlewareをimportし、storeに登録
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// redux-thunkが「普通のaction」か「thunk の action」かを判断
import thunk from "redux-thunk";


// DatePickerの導入
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";


// 表示するためのcomponentである。connect後のファイルをimportすることに気をつける
import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Nvigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";




// dayjsを日本時刻で使うための設定
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");


// storeを作成して、rootReducer、applyMiddlewareを登録
import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils} >
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

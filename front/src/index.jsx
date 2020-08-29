// 
// reactで作成したものをHTML形式に変換して、index.htmlに全データを渡す
// 働きを担う。
// 


import React from "react";
import ReactDOM from "react-dom";

// storeを作成する際はこの二つをセットでimportする
import { Provider } from "react-redux";
import { createStore } from "redux";


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


// rootReducerをimportし,
// createStoreの引数に渡して、storeを作成する
import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer);


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

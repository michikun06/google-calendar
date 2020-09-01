
// hostにAPIのメインpathを代入しておく
const host = "http://localhost:8081/api";

// host / 〇〇とすることで、apiで行う処理（crud）のURLを作成
const url = path => `${host}/${path}`;

const header = {
    headers: {
        "Content-Type": "application/json"
    }
};

// urlから処理を行い、APIから返ってきた結果をJSON配列にして返す関数
// 引数pathに行いたい処理が入る
export const get = async path => {

    // fetchはResponse型のデータのPromiseを返す、
    // respは様々な通信に関する情報をもっている
    const resp = await fetch(url(path))

    // respに入っている情報からjsonデータを取得して
    // resultにセットする
    const result = await resp.json();

    return result;
}


export const post = async (path, body) => {
    const options = { ...header, method: "POST", body: JSON.stringify(body) };

    const resp = await fetch(url(path), options);

    const result = await resp.json();

    return result;
}

// 削除する関数
export const deleteRequest = async path => {

    const options = { method: "DELETE" };

    // 削除処理を実行している成功したらStatus: 204 No Contentが返ってくるためそのままreturn
    await fetch(url(path), options);

    return;
}
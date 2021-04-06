// 行いたい処理ごとにURLを生成（作成、削除、取得）
const host = "http://localhost:8081/api";
const url = path => `${host}/${path}`;

const header = {
    headers: {
        "Content-Type": "application/json"
    }
};


// 
// 取得処理
// 
export const get = async path => {
    const resp = await fetch(url(path))   //　処理別にデータを非同期で取得
    checkError(resp.status);              // Status Code が 400 より大きい時にエラーを発生させる
    const result = await resp.json()      // 取得したデータを非同期でJson文字列にする

    return result;
}


// 
// 作成処理
// 
export const post = async (path, body) => {
    const options = { ...header, method: "POST", body: JSON.stringify(body) };

    const resp = await fetch(url(path), options);
    checkError(resp.status);                    // Status Code が 400 より大きい時にエラーを発生させる
    const result = await resp.json();

    return result;
};


// 
// 削除処理
// 
export const deleteRequest = async path => {
    const options = { method: "DELETE" };

    const resp = await fetch(url(path), options)
    checkError(resp.status);                         // Status Code が 400 より大きい時にエラーを発生させる

    return;
};



// 
// エラーのヘルパー関数
// 
const checkError = status => {
    if (status >= 400) {
        throw new Error("通信エラーが発生しました、時間を置いて再度お試しください。")
    }
};
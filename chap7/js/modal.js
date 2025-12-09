// 要件
// - x秒後にバナーが表示される
// - 一度表示したら一定期間表示されなくする
// - 表示・非表示にはフェードアニメーションを使う

const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const mask = document.querySelector('#mask');

const show = {
    opacity: [0, 1],
    visibility: 'visible',
};
const hide = {
    opacity: [1, 0],
    visibility: 'hidden',
};
const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards',
};


// タイマー機能

// バナーを表示する関数
function showBanner() {
    const timerID = setTimeout(() => {
        console.log('バナーを表示する時間になりました');
        // バナー表示
        modal.animate(show, options);
        mask.animate(show, options);
    }, 2000);
}

// 表示した証拠をセッションストレージへ追加する関数
function setBannerData() {
    const setData = {
        show: true,
        // expire: Date.now() + 3600000, //1時間後
        expire: Date.now() + 10000, // 10秒後
    };

    // ↑のデータを文字列化して返す
    return JSON.stringify(setData);
}

const isBannerShow = sessionStorage.getItem('banner_show');

// セッションストレージから取得したデータは文字列
console.log(isBannerShow);

// 文字列データをオブジェクトデータに変換
const isBannerShowObj = JSON.parse(isBannerShow);
console.log(isBannerShowObj);

if (!isBannerShowObj) {
    // 証拠がない

    showBanner();

    const bannerData = setBannerData();

    // 1回表示したので、セッションストレージへ証拠と有効期限を保存
    sessionStorage.setItem('banner_show', bannerData);

} else {
    // 証拠がある

    // 有効期限を調べて、有効期限切れなら一旦証拠を更新する
    if (Date.now() > isBannerShowObj.expire) {
        // 証拠を一度破棄する
        sessionStorage.removeItem('banner_show');

        // バナーを表示する
        showBanner();

        const bannerData = setBannerData();

        // 1回表示したので、セッションストレージへ証拠と有効期限を保存
        sessionStorage.setItem('banner_show', bannerData);

    }

}


// clearTimeout(タイマーのID番号); // タイマーを解除する
// setInterval(); //一定秒数ごとに繰り返す
// clearInterval(タイマーのID番号)


close.addEventListener('click', () => {
    modal.animate(hide, options);
    mask.animate(hide, options);
});

mask.addEventListener('click', () => {
    close.click();
});

// 一度表示したら一定期間表示されなくする
// 1. cookieを利用する
// 2. sessionStorageを利用する

// データの挿入
// sessionStorage.setItem('banner_show', 'true');

// データの読み出し
// const isBannerShow = sessionStorage.getItem('banner_show');
// console.log(isBannerShow);

// データの削除
// sessionStorage.removeItem('banner_show');


// 有効期限の設定（例: 1時間後）
const expire = Date.now() + 3600000;
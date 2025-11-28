const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    console.log('ロードされました');
    // classListはclass属性値の制御をおこなうことができるプロパティ
    // add(追加), remove(削除), toggle(追加・削除), contains(クラス属性値の存在チェック)
    loading.classList.add('loaded');
});
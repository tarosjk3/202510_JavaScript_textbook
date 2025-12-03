// 監視ロボットにやってもらいたい処理
const showKirin = (entries) => {
    console.log('キリン🦒');
    console.log(entries[0].isIntersecting);
};

// 監視ロボットの作成、名前付
const kirinObserver = new IntersectionObserver(showKirin);

// #kirinを監視するように指示
kirinObserver.observe(document.querySelector('#kirin'));

function test(callback) {
    const weather = '☀️';

    callback(weather);
}

function abc(x) {
    console.log('abcを実行しました', x);
}

// abc('☁️');

test(abc);


要素.addEventListener('click', (event) => {
    event.target
})
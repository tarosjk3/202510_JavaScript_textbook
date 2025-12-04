// アニメーションしたかどうかの判定材料
let isAnimated = false;

// 監視ロボットにやってもらいたい処理
const showKirin = (entries) => {
    console.log('キリン🦒');
    console.log(entries[0]);

    // 一度でもアニメーションしていたら isAnimated はtrueなので、returnでその後の処理は実行しない
    // if(isAnimated) {
    //     return;
    // }
    if(isAnimated || !entries[0].isIntersecting) return;

    const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', 0],
    };

    entries[0].target.animate(keyframes, 600);

    // 1回アニメーションした
    isAnimated = true;
};

const options = {
    rootMargin: '-50px 0px',
    threshold: 0.5,
};

// 監視ロボットの作成、名前付
const kirinObserver = new IntersectionObserver(showKirin, options);

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


// 要素.addEventListener('click', (event) => {
//     event.target
// })
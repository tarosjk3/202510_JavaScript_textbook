console.log('JS準備完了')
console.dir(document.querySelector('#colorPicker').value);
// document.querySelector('#colorPicker').value;
/*
１行目
２行目
*/

document.querySelector('#colorText').textContent;
console.log(document.querySelector('#colorText').textContent);

// Pタグのテキスト内容
document.querySelector('#colorText').textContent = `カラーコード: ${document.querySelector('#colorPicker').value}`;

// 定数に代入
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = `カラーコード: ${color.value}`


const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード: ${color.value} (white)`;
    } else if( color.value === '#000000') {
        text.textContent = `カラーコード: ${color.value} (black)`;
    } else {
        text.textContent = `カラーコード: ${color.value}`;
    }
};
// 要素.addEventListener('イベント名', 動作内容:関数)
color.addEventListener('input', colorBg);

// CSSの関数の例: rgba(0,0,0,.5)

// 関数宣言(function構文) 巻き上げ（ホイスティング）が起こる
// test(); // ⭕️
function test(a) { //aの部分は引数という
    console.log('関数testが実行されました');
    console.log(`今日の天気は ${a}`);
}

test('晴れ');
test('雨');

function add(a,b) {
    return a + b;
}

const sum = add(5, 3)

// アロー関数(関数式: 代入)
// arrowTest(); // ❌
// 引数が１つの場合は () は無くてもOK
const arrowTest = (a, b) => {
    console.log('アロー関数が実行されました');
    console.log(`今日の天気は ${a} ${b}`);

    return '今日の天気予報をお伝えしました';

    console.log('ここは実行される？');
};

const result = arrowTest('曇り', '☁️');
console.log(result);

// P要素のスタイルをチェック
console.log(text.style);
text.style.backgroundColor = 'yellow';
const menu = document.querySelector('#menu');

const strawberry = {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450,
    message: function () {
        console.log('おいしいいちごです');
    }
};


// strawberry.message();

console.log(strawberry);

// const lists = [
//     'apple.jpg',
//     'fig.jpg',
//     'lemon.jpg',
//     'lime.jpg',
//     'mango.jpg',
//     'strawberry.jpg'
// ];

const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400,
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500,
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400,
    },
    {
        name: 'イチヂク',
        img: 'fig.jpg',
        price: 500,
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400,
    },
];

// const content = `
//     <div><img src="images/${lists[0]}" alt=""></div>
//     <div><img src="images/${lists[1]}" alt=""></div>
//     <div><img src="images/${lists[2]}" alt=""></div>
//     <div><img src="images/${lists[3]}" alt=""></div>
//     <div><img src="images/${lists[4]}" alt=""></div>
//     <div><img src="images/${lists[5]}" alt=""></div>
// `;

for (let i = 0; i < lists.length; i++) {
    // const sample = {
    //     name: lists[i].name,
    //     img: lists[i].img,
    //     price: lists[i].price,
    // };
    
    const {name, img, price} = lists[i];

    const content = `
        <div>
            <img src="images/${img}" alt="">
            <h2>${name}</h2>
            <p>${price}円</p>
        </div>
    `;
    menu.insertAdjacentHTML('beforeend', content);
}


console.log(lists);

const pop = lists.pop();
console.log(lists, pop);

lists.push('orange.jpg');
console.log(lists);

lists.reverse();
console.log(lists);

console.log(lists.join(' / '));

// menu.insertAdjacentHTML('beforeend', content);

for (let i = 1; i <= 10; i++) {
    console.log(`${i}こんにちは`);
}

let j = 0;
// j = j + 1;
// j += 1;
// j++; //インクリメント
console.log(j++); // 出力結果: 0 ++の演算のタイミングは遅い
console.log(j); // 1

j = j - 1;
j -= 1;
j--; //デクリメント


let letName = '太郎';
letName = '花子';

const constName = '太郎';
// ✖ constName = '花子';

const sampleArray = ['りんご', 'ばなな', 'ぶどう'];
sampleArray[0] = 'いちご';
console.log(sampleArray);
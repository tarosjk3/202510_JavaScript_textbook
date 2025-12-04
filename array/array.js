const trains = ['JR山手線', '東急田園都市線', '都営新宿線'];

// 1. forEach - 全ての要素に対して同じことをする
// const trainFunc = () => {};
trains.forEach((train, index) => {
    console.log(`${index + 1} ${train}`);
});

for(let i = 0; i < trains.length; i++) {
    console.log(`${i + 1} ${trains[i]}`);
}

// 2. map - 全部取り出して、変化させて、新しい配列を作る
const trainsWithNumber = trains.map((train, index) => {
    return `${index + 1} ${train}`;
});
console.log(trainsWithNumber);

// 3. filter - 条件に合うものだけを取り出す
// const trainsFiltered = trains.filter((train) => {
//     return train.includes('JR');
// });
// アロー関数の省略形
// 引数が1つの場合は()は無くてもOK
// 単純にreturnするだけなら return は無くてもOK、{}も必要なし
const trainsFiltered = trains.filter(train => train.includes('JR'));
console.log(trainsFiltered);

// 4. some - 1つでも条件に合ったものがあるかどうかを調べる
const hasKeio = trains.some((train) => {
    return train.includes('東急');
});
console.log(hasKeio);
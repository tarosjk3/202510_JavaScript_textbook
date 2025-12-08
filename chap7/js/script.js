// 要素の取得
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

// ローディング画面から遷移
window.addEventListener('load', () => {
    // ローディング（グレースクリーン）
    loadingAreaGrey.animate(
        {
            // opacity: [1, 0],
            backdropFilter: ['blur(10px)', 'blur(0)'],
            background: ['rgba(238, 221, 136, 1)', 'rgba(238, 221, 136, 0)'],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    // ローディング（薄緑スクリーン）
    // loadingAreaGreen.animate(
    //     {
    //         translate: ['0 100vh', '0 0', '0 -100vh'],
    //     },
    //     {
    //         duration: 2000,
    //         delay: 800,
    //         easing: 'ease',
    //         fill: 'forwards',
    //     }
    // );

    // ローディングテキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 // 80%
            },
            {
                opacity: 0,
                offset: 1 // 100%
            }
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});


// 画像ギャラリー
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

console.log(mainImage, thumbImages);

// for(let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener('mouseover', (e) => {
//         // console.log(thumbImages[i]);
//         // console.log(e.target);
//         console.log(e.target.src);

//         mainImage.src = e.target.src;

//         mainImage.animate(
//             {
//                 opacity: [0, 1],
//             }, 
//             500
//         );
//     });
//     // thumbImages[i].addEventListener('mouseover', function() {
//     //     console.log(this); //thisはイベントが発生した要素を含む
//     // });
// }

// forEachを使ってfor文を置き換え
thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener('mouseover', (e) => {
        console.dir(e.target);

        const caption = `${e.target.alt} （${e.target.dataset.extra}）`;

        document.querySelector('#caption').textContent = caption;

        mainImage.src = e.target.src;
        mainImage.animate(
            {
                opacity: [0, 1],
            }, 
            500
        );
    });
});

// function test(callback) {
//     const data = '今日は晴れです';

//     callback(data); // abc();
// }

// function abc(x) {
//     console.log(x);
// }

// test(abc);
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


// スライドメニュー
const menuOpen = document.querySelector('#menu-open'),
    menuClose = document.querySelector('#menu-close'),
    menuPanel = document.querySelector('#menu-panel'),
    menuItems = document.querySelectorAll('#menu-panel li'),
    menuOptions = {
        duration: 1400,
        easing: 'ease',
        fill: 'forwards',
    };

menuOpen.addEventListener('click', () => {
    menuPanel.animate(
        {
            translate: ['100vw', 0],
        },
        menuOptions
    );

    menuItems.forEach((menuItem, index) => {
        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0],
            },
            {
                duration: 2400,
                easing: 'ease',
                fill: 'forwards',
                delay: 300 * index,
            }
        );
    });

});

menuClose.addEventListener('click', () => {
    menuPanel.animate(
        {
            translate: [0, '100vw'],
        },
        menuOptions
    );

    menuItems.forEach((menuItem) => {
        menuItem.animate(
            {
                opacity: [1, 0],
            },
            menuOptions
        );
    });
});


// スクロールで要素を表示
const animateFade = (entries, obs) => {
    console.log('フェードイン');
    console.log(entries);

    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target, 'が交差しました');
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate:['0 4rem', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );

            // 一度アニメーションしたら、監視対象から要素を外しアニメーションしないように設定
            obs.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');

fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});

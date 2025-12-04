// 要素の取得
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');

// ローディング画面から遷移
window.addEventListener('load', () => {
    // ローディング（グレースクリーン）
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
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
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh'],
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});
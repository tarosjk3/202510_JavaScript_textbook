const bar = document.querySelector('#bar');

const getScrollPercent = () => {
    // console.log('scrollされました');

    // スクロール量
    const scrolled = window.scrollY;
    console.log(`${scrolled} スクロールされました`);

    // ページの高さ
    const pageHeight = document.documentElement.scrollHeight;

    // 表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;

    // スクロールした割合
    const percentage = Math.round(scrolled / (pageHeight - viewHeight) * 100);
    console.log(percentage);
    
    bar.style.width = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);
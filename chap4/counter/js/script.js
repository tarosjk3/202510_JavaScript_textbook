const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
    console.log('キーアップ');
    count.textContent = text.value.length;

    // if(text.value.length > 100) {
    //     count.classList.add('alert');
    // } else {
    //     count.classList.remove('alert');
    // }
    count.classList.toggle('alert', text.value.length > 100);
});
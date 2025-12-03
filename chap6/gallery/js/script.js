const items = document.querySelectorAll('.img-item');
console.log(items);

const keyframes = {
    // opacity: [0, 1],
    // rotate: ['x 90deg', 0],
    // translate: ['0 50px', 0],
    // rotate: ['5deg', 0],
    // scale: [1.1, 1],
    filter: ['blur(20px) brightness(300%)', 'blur(0) brightness(100%)'],
};

for (let i = 0; i < items.length; i++) {

    const options = {
        duration: 600,
        fill: 'forwards',
        delay: i * 300,
    };

    items[i].animate(keyframes, options);

}

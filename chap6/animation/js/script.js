const heading = document.querySelector('#heading');
const heading2 = document.querySelector('#heading2');
const jq = jQuery(window);

const keyframes = {
    // opacity: [0, 1],
    // translate: ['0 50px', 0],
    // rotate: ['x 360deg', 0],
    // color: ['#f66', '#fc2', '#0c6', '#0bd'],
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};
const options = {
    duration: 2000,
    // easing: 'ease',
    // easing: 'cubic-bezier(1,-0.53,.08,1.19)',
    iterations: Infinity,
    direction: 'alternate',
};

heading.animate(keyframes, options);

const keyframes2 = {
    borderRadius: [
        '20% 50% 50% 70% / 50% 50% 70% 50%',
        '50% 20% 50% 50% / 40% 40% 60% 60%',
        '50% 40% 20% 40% / 10% 50% 50% 80%',
        '40% 50% 50% 20% / 40% 30% 60% 60%',
    ]
};
const options2 = {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
};

heading2.animate(keyframes2, options2);
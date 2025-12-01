const menu = document.querySelector('#menu');

const lists = [
    'apple.jpg',
    'fig.jpg',
    'lemon.jpg',
    'lime.jpg',
    'mango.jpg',
    'strawberry.jpg'
];

const content = `
    <div><img src="images/${lists[0]}" alt=""></div>
    <div><img src="images/${lists[1]}" alt=""></div>
    <div><img src="images/${lists[2]}" alt=""></div>
    <div><img src="images/${lists[3]}" alt=""></div>
    <div><img src="images/${lists[4]}" alt=""></div>
    <div><img src="images/${lists[5]}" alt=""></div>
`;

console.log(lists);

const pop = lists.pop();
console.log(lists, pop);

lists.push('orange.jpg');
console.log(lists);

lists.reverse();
console.log(lists);

console.log(lists.join(' / '));

menu.insertAdjacentHTML('beforeend', content);
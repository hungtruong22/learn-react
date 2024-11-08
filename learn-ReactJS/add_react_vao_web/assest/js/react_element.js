var app = document.querySelector('#app');

/*
    BT1:
    Tạo : <h1 title="Hello" class="heading">Hello guys!</h1>
*/

// dùng DOM
const h1DOM = document.createElement('h1');
h1DOM.title = 'Hello';
h1DOM.className = 'heading';
h1DOM.innerText = 'Hello guys!' 

app.appendChild(h1DOM);


// dùng REACT

//React.createElement(type, props, children, n)

const h1React = React.createElement('h1', {
    title: 'Hello',
    className: 'heading',
}, 'Hello guys!');

console.dir(h1DOM);
console.log(h1React);

/*
    BT2:
    Tạo : 
    <ul>
        <li>JavaScript</li>
        <li>ReactJS</li>
    </ul>
*/

// dùng DOM
const ulDOM = document.createElement('ul');
const liDOM1 = document.createElement('li');
liDOM1.innerText = 'JavaScript';

const liDOM2 = document.createElement('li');
liDOM2.innerText = 'ReactJS';

ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);

app.appendChild(ulDOM);

// dùng react

const ulReact = React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'JavaScript'),
    React.createElement('li', null, 'ReactJS'),
    );

console.log(ulReact);
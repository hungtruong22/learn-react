/*
    BT:
    Tạo: 
    <div class="post-item">
        <h2 title="Học React tại F8">Học ReactJS</h2>
        <p>Học react từ cơ bản đến nâng cao</p>
    </div>
*/

var app = document.querySelector('#app');

const postItem = React.createElement('div', {
    className: 'post-item',
    },
    React.createElement('h2',{
        title: 'Học React tại F8'
    },
        'Học ReactJS'
    ),
    React.createElement('p',null,'Học React từ cơ bản đến nâng cao')  
);

// get root element
const root = document.getElementById('root');

// React-DOM -> render UI
// react 17
ReactDOM.render(postItem,root); 

// react 18
// const container = document.getElementById('root');
// const root1 = ReactDOM.creatRoot(container);
// root1.render(postItem);

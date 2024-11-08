const root = document.getElementById('root');
const ReactCourses = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'Responsive web design'
    },
    {
        name: 'ReactJS'
    }
]; 
// cách 1
const ul = <ul>
                {ReactCourses.map((item, index) => {
                    return <li 
                        key = {index}
                    >{item.name}</li>
                })}
            </ul>
ReactDOM.render(ul,root);


// cách 2
// const ul1 = <ul>
//                 {ReactCourses.map((item) => {
//                     ReactCourses.createElement('li', null, item.name)
//                 })}
//             </ul>
// ReactDOM.render(ul1,root);
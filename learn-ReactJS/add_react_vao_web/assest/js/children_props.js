function Button({title, primary}){
    console.log(primary);
    // logic..
    return <button>{title}</button>
}

function App(){
    const title = "Heloo mọi người"
    return(    
        <div id = "wrapper">
            <Button primary title={title}/> 
        </div>
        //primary để không thì sẽ là kiểu boolean giá trị true
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));


// component thường làm trong thực tế


// cách 1:
// function Input({label, type, placeholder}){
//     return(
//         <div>
//             <label>{label}</label>
//             <input type={type} placeholder={placeholder}/>
//         </div>
//     )
// }


// cách 2 dùng giải và rest
function Input({label, ...inputProps}){
    return(
        <div>
            <label>{label}</label>
            <input {...inputProps}/>
        </div>
    )
}

function App2(){
    return(    
        <div id = "wrapper">
            <Input
                label = "Full Name"
                type = "text"
                placeholder = "Enter name....."
                title = "Đây là input"
                onFocus = {() =>{
                    console.log(Math.random())
                }} 
            />
        </div>
    )
}

ReactDOM.render(<App2/>, document.getElementById('root'));
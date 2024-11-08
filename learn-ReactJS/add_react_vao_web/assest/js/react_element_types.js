const root = document.getElementById('root');

function Header(){
    return (
        <div className="header">New Header</div>
    )
}

class Content extends React.Component {
    render(){
        return (
            <div className="content">New Content</div>
        )
    }
}

const app = (
    <div className="wrapper">
        {/* <div className="header">Header</div> */}
        <Header />
        {/* <div className="content">Content</div> */}
        <Content />
        <div className="footer">Footer</div>
    </div>
)

ReactDOM.render(app, root);

// BT:

function PostItem(){
    return (
        <div className="post-item">
            <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368983c16.jpg" alt="Thời gian và động lực"/>
            <h2 className="post-title">Thời gian và động lực</h2>
            <p className="post-desc">Tạo thói quen tốt cho bản thân bạn</p>
            <p className="post-published">Một ngày trước</p>
        </div>
    )
}

const app1 = (
    <div className="posts-list">
        <PostItem/>
        <PostItem/>
    </div>
)

ReactDOM.render(app1, root);


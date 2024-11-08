function App(){
    return (
        <div id="wrapper">
            <button onClick = {() => console.log(Math.random())}>Click me!</button>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById('root'))

const courses = [
    {
      id: 15,
      title: "HTML CSS Pro",
      slug: "htmlcss",
      description:
        "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
      image: "courses/15/62f13d2424a47.png",
      icon: "courses/15/62385d6c63dfa.png",
      video_type: "upload",
      video: null,
      old_price: 2500000,
      price: 1299000,
      pre_order_price: 699000,
      students_count: 3837,
      is_pro: true,
      is_coming_soon: false,
      is_selling: true,
      published_at: "2022-08-18T17:00:00.000000Z",
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
      icon_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
      video_url: "",
      landing_page_url: "/landing/htmlcss",
      is_pre_order: false,
      is_published: true
    },
    {
      id: 27,
      title: "Ngôn ngữ tiền xử lý Sass",
      slug: "sass",
      description:
        "Đây là một khóa học nhỏ được tách ra từ 2 chương học trong khóa HTML CSS Pro. Kiến thức về Sass trong khóa này bạn có thể áp dụng ngay vào các dự án của bạn.",
      image: "courses/27/64e184ee5d7a2.png",
      icon: "courses/27/64e0daf212fad.png",
      video_type: "upload",
      video: "courses/27/oeT5zTmdk8KlHwU2meMJpnR7uihkX6OvYxnkjiB9.mp4",
      old_price: 400000,
      price: 299000,
      pre_order_price: 0,
      students_count: 0,
      is_pro: true,
      is_coming_soon: false,
      is_selling: true,
      published_at: "2023-08-19T15:06:00.000000Z",
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png",
      icon_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/27/64e0daf212fad.png",
      video_url:
        "https://videos.fullstack.edu.vn/f8-prod/courses/27/oeT5zTmdk8KlHwU2meMJpnR7uihkX6OvYxnkjiB9.mp4",
      landing_page_url: "/landing/sass",
      is_pre_order: false,
      is_published: true
    },
    {
      id: 19,
      title: "JavaScript Pro",
      slug: "javascript-pro",
      description: "Khóa học JavaScript Pro",
      image: "courses/19/62f13cb607b4b.png",
      icon: "courses/19/62f13cb685c81.png",
      video_type: "upload",
      video: null,
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 0,
      is_pro: true,
      is_coming_soon: true,
      is_selling: false,
      published_at: "2023-11-30T17:00:00.000000Z",
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
      icon_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
      video_url: "",
      landing_page_url: "/landing/javascript-pro",
      is_pre_order: false,
      is_published: false
    },
    {
      id: 20,
      title: "NextJS Pro",
      slug: "reactjs-pro",
      description: "Khóa học NextJS Pro",
      image: "courses/20/648020fc16597.png",
      icon: "courses/20/648020fcc8000.png",
      video_type: "upload",
      video: null,
      old_price: 0,
      price: 0,
      pre_order_price: 0,
      students_count: 0,
      is_pro: true,
      is_coming_soon: true,
      is_selling: false,
      published_at: "2024-03-31T17:00:00.000000Z",
      is_registered: false,
      user_progress: 0,
      last_completed_at: null,
      image_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png",
      icon_url:
        "https://files.fullstack.edu.vn/f8-prod/courses/20/648020fcc8000.png",
      video_url: "",
      landing_page_url: "/landing/reactjs-pro",
      is_pre_order: false,
      is_published: false
    }
  ];
  // CourseItem.js
  function CourseItem({course, onClick}) {
    return (
      <div className="post-list">
        <div className="post-item">
          <h2
            className="post-title"
            onClick={()=>onClick(course)}
          >
            {course.title}
          </h2>
          <img src={course.image_url} alt={course.title}></img>
          <p className="post-desc">{course.description} </p>
          <p className="post-count">{course.students_count} </p>
        </div>
      </div>
    );
  }
  // App.js
  function App2() {

    const handleClick = (course) => {
            alert("bạn có muốn mua khóa học  " + course.title + " không?");
    }

    return (
      <div id="wrapper">
        {courses.map(function (course) {
          return (
            <CourseItem
              key={course.id}
              course={course}
              onClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
  
//   ReactDOM.render(<App2 />, document.getElementById("root"));



  const Form = {
    Input(){
        return <input />
    },
    Checkbox(){
        return <input type="checkbox" />
    }
  }

  function App3(){

    const type = "Checkbox"
    // console.log(Form[type])
    
    const Component = Form[type]

    return(
        <div id="wrapper">
            <Component />
        </div>
    )
  }
  
//   ReactDOM.render(<App3 />, document.getElementById("root"));


function Button({title, href, onClick}){
    let Component1 = 'button'
    const props = {}

    if(href){
        Component1 = 'a'  
        props.href = href
    }
    if(onClick){
        props.onClick = onClick
    }

    return(
        <Component1 {...props}>{title}</Component1>
    )
}

function App4(){
    return (
        <div id="wrapper">
            <Button 
                title="Click me!" 
                href="https://fullstack.edu.vn/"
                onClick={()=>console.log(Math.random())}    
            />
        </div>
    )
}

ReactDOM.render(<App4 />, document.getElementById("root"));
/*
    Props
        - React elements
            - Sử dụng props giống như với attribute của thẻ HTML
            - 2 props class, for => className, htmlFor
            - Phải tuân theo quy ước có sẵn
        - React components
            - Sử dụng props giống như đối số cho Component
            - Tự do đặt tên props
                - Đặt theo camelCase
                - * Сó thẻ bao gồm dấu gạch ngang
        - Chú y:
            - Prop "key" là prop đặc biêt
            - Props cơ bản là đối số của Component
                => Props có thể là bất cứ kiểu dữ liệu gì
            - Sử dụng destructuring
*/

// BT:
// PostItem.js
function PostItem(props){
    //console.log(props);
    if(typeof props.callback === 'function'){
        props.callback(Math.random())
    }
    return (
        <div className="post-item">
            <img src={props.image} alt={props.title}/>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-desc">{props.description}</p>
            <p className="post-published">{props.published}</p>
            <lable htmlFor="cmt">Bình luận</lable>
            <input id="cmt"/>
        </div>
    )
}

// App.js
function App(){
    return (
            <div className="posts-list">
                <PostItem
                    title = "Thời gian và động lực"
                    image = "https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368983c16.jpg"
                    description = "Tạo thói quen tốt cho bản thân bạn"
                    published = "Một ngày trước"
                    callback = {(random) => {
                        console.log("random: ", random);
                    }}
                />

                <PostItem
                    title = "Các nguồn tài nguyên hữu ích"
                    image = "https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png"
                    description = "Các tài nguyên bổ ich"
                    published = "Một tiếng trước"
                />
            </div>
    )
}

//index.js
//ReactDOM.render(<App />, document.getElementById('root'));


// BT2 

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
  function CourseItem(props) {
    return (
      <div className="post-list">
        <div className="post-item">
          <h2
            className="post-title"
            onClick={(e) => {
              alert("bạn có muốn mua khóa học  " + props.title + " không?");
            }}
          >
            {props.title}
          </h2>
          <img src={props.image} alt={props.title}></img>
          <p className="post-desc">{props.description} </p>
          <p className="post-count">{props.studentsCount} </p>
        </div>
      </div>
    );
  }
  // App.js
  function App2() {
    return (
      <div id="wrapper">
        {courses.map(function (course) {
          return (
            <CourseItem
              key={course.id}
              title={course.title}
              image={course.image_url}
              description={course.description}
              studentsCount={course.students_count}
            />
          );
        })}
      </div>
    );
  }
  
  ReactDOM.render(<App2 />, document.getElementById("root"));
  
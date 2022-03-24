import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  //   const [name, setName] = useState("mario");

  //   const handleClick = () => {
  //     setName("Abhi");
  //     setAge(30);
  //   };

  //   const handleClickAgain = (name, e) => {
  //     console.log("hello " + name, e);
  //   };

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

// handleDelete={handleDelete}
{
  /* <button onClick={() => setName("abhi")}>change name</button>
      <p>{name}</p> */
}
{
  /* <BlogList
blogs={blogs.filter((blog) => blog.author === "mario")}
title="Marios Blogs"
/> */
}

{
  /* <button
        onClick={(e) => {
          handleClickAgain("mario", e);
        }}
      >
        Click Me Again
      </button> */
}

{
  /* <p>
        {name} is {age} years old
      </p> */
}

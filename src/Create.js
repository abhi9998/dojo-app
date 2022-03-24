import { wait } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    wait(1000);
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new addded");
      setIsPending(false);

      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="abhi">abhi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding..</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;

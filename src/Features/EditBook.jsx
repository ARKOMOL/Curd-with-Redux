import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditBook = () => {
  const location = useLocation();
  console.log(location)

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  return (
    <div>
        <h1>Edit Book</h1>
      <form >
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            name="title"
            id="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <button type="submit">Add New</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;

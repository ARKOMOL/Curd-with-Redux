import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {updateBook} from './BooksSlice.js'

const EditBook = () => {
  const location = useLocation();
  console.log(location)
const dispatch =useDispatch();
const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit= e =>{
    e.preventDefault();
   dispatch(updateBook ( {id,title,author}));
   navigate('/show-book', {replace:true})
  }

  return (
    <div>
        <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Update Book</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
